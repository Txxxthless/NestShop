import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: User) {
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

    const payload = { sub: createdUser.id, name: createdUser.name };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

  async login(loginDto: User) {
    const user = await this.userRepository.findOneBy({
      email: loginDto.email,
    });

    if (!user) {
      return new UnauthorizedException();
    }

    if (user.password !== loginDto.password) {
      return new UnauthorizedException();
    }

    const payload = { sub: user.id, name: user.name };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
