import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '../models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../models/userDto.model';
import { Basket } from '../models/basket.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Basket) private basketRepository: Repository<Basket>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: UserDto) {
    const user = await this.userRepository.findOneBy({
      email: registerDto.email,
    });

    if (user) {
      return new BadRequestException(
        null,
        'User with same email already exists',
      );
    }

    const createdUser = await this.userRepository.save(registerDto);
    const basket = new Basket(createdUser);

    this.basketRepository.save(basket);

    return this.createTokenAndSignInAsync(createdUser);
  }

  async login(loginDto: UserDto) {
    const user = await this.userRepository.findOneBy({
      email: loginDto.email,
    });

    if (!user) {
      return new UnauthorizedException('Incorrect email or password');
    }

    if (user.password !== loginDto.password) {
      return new UnauthorizedException('Incorrect email or password');
    }

    return this.createTokenAndSignInAsync(user);
  }

  private async createTokenAndSignInAsync(user: User) {
    const payload = { sub: user.id, email: user.email };

    return {
      email: user.email,
      token: await this.jwtService.signAsync(payload),
    };
  }
}
