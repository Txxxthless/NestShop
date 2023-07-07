import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from './brand.model';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @ManyToOne((type) => Brand, (brand) => brand.id)
  brand: Brand;

  @Column()
  price: number;

  @Column()
  description: string;
}
