import { Product } from 'src/shop/models/product.model';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Basket } from './basket.model';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Product, (product) => product.id)
  product: Product;

  @ManyToOne((type) => Basket, (basket) => basket.id)
  basket: Basket;
}
