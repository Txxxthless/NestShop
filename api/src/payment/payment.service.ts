import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Basket } from 'src/account/models/basket.model';
import { Order } from 'src/account/models/order.model';
import { User } from 'src/account/models/user.model';
import { Product } from 'src/shop/models/product.model';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Basket) private basketRepository: Repository<Basket>,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async processPayment(requestUser: any) {
    const user = await this.userRepository.findOne({
      where: {
        email: requestUser.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const basket = await this.basketRepository.findOne({
      where: {
        user: user,
      },
      relations: {
        user: true,
      },
    });

    const orders = await this.orderRepository.find({
      where: {
        basket: basket,
      },
      relations: {
        basket: true,
        product: true,
      },
    });

    let overalPrice = 0;

    for (let order of orders) {
      overalPrice += order.quantity * order.product.price;
    }

    await this.orderRepository.remove(orders);

    return {
      succeeded: true,
      payedPrice: overalPrice,
    };
  }
}
