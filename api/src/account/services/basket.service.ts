import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/shop/models/product.model';
import { Repository } from 'typeorm';
import { Basket } from '../models/basket.model';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { OrderDto } from '../models/orderDto.model';

@Injectable()
export class BasketService {
  constructor(
    @InjectRepository(Basket) private basketRepository: Repository<Basket>,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getBasket(requestUser: any) {
    const user = await this.userRepository.findOneBy({
      email: requestUser.email,
    });

    const basket = await this.basketRepository.findOne({
      where: { user: user },
      relations: {
        user: true,
      },
    });

    const orders = await this.orderRepository.find({
      where: { basket: basket },
      relations: {
        basket: true,
        product: true,
      },
    });

    const orderDtos = [];

    for (let order of orders) {
      const product = order.product;
      orderDtos.push(
        new OrderDto(
          order.id,
          product.name,
          product.price,
          order.quantity,
          product.id,
        ),
      );
    }

    return orderDtos;
  }

  async addProduct(productId: number, requestUser: any) {
    const { product, user, basket } = await this.getRelations(
      productId,
      requestUser,
    );

    let order = await this.orderRepository.findOne({
      where: {
        basket: basket,
        product: product,
      },
    });

    if (order) {
      order.quantity++;
      this.orderRepository.save(order);
      return;
    }

    order = new Order(basket, product, 1);

    await this.orderRepository.save(order);
  }

  async removeProduct(productId: number, requestUser: any) {
    const { product, user, basket } = await this.getRelations(
      productId,
      requestUser,
    );

    const order = await this.orderRepository.findOne({
      where: { basket, product },
    });

    if (order.quantity === 1) {
      await this.orderRepository.remove(order);
      return;
    }

    order.quantity--;
    await this.orderRepository.save(order);
  }

  private async getRelations(productId: number, requestUser: any) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: {
        brand: true,
      },
    });

    if (!product) {
      throw new BadRequestException('Product does not exist');
    }

    const user = await this.userRepository.findOneBy({
      email: requestUser.email,
    });

    const basket = await this.basketRepository.findOne({
      where: { user: user },
      relations: {
        user: true,
      },
    });

    return { product, user, basket };
  }
}
