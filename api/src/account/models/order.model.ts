import { Product } from 'src/shop/models/product.model';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Basket } from './basket.model';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  quantity: number;

  @ManyToOne((type) => Product, (product) => product.id)
  product: Product;

  @ManyToOne((type) => Basket, (basket) => basket.id)
  basket: Basket;

  constructor(basket: Basket, product: Product, quantity: number) {
    this.product = product;
    this.basket = basket;
    this.quantity = quantity;
  }
}
