import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async register(user: User) {
    const userFromDb = await this.userRepository.findOneBy({
      email: user.email,
    });

    if (userFromDb) {
      return new BadRequestException(
        null,
        'User with same email already exists',
      );
    }

    await this.userRepository.save(user);
    /*
     GENERATE JWT TOKEN
     */
    return 'super token!';
  }

  async login(user: User) {
    const userFromDb = await this.userRepository.findOneBy({
      email: user.email,
    });

    if (!userFromDb) {
      return new UnauthorizedException();
    }

    if (userFromDb.password !== user.password) {
      return new UnauthorizedException();
    }
    /*
     GENERATE JWT TOKEN
     */
    return 'super token!';
  }
}
