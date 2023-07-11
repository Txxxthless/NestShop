import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.model';

@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => User, (user) => user.id)
  @JoinColumn()
  user: User;
}
