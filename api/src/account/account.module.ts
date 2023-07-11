import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { BasketController } from './controllers/basket.controller';
import { BasketService } from './services/basket.service';
import { Basket } from './models/basket.model';
import { Order } from './models/order.model';
import { Product } from 'src/shop/models/product.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Basket, Order, Product]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6 days' },
    }),
  ],
  controllers: [AuthController, BasketController],
  providers: [AuthService, BasketService],
})
export class AccountModule {}
