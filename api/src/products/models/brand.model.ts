import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.model';

@Entity()
export class Brand {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Product, (product) => product.brand)
  products: Product[];
}
