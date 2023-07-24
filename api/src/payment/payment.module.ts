import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/account/models/user.model';
import { Basket } from 'src/account/models/basket.model';
import { Order } from 'src/account/models/order.model';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Basket, Order]), AccountModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
