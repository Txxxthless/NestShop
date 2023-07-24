import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/account/guards/auth.guard';
import { PaymentService } from './payment.service';

@UseGuards(AuthGuard)
@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post()
  processPayment(@Request() { user }) {
    return this.paymentService.processPayment(user);
  }
}
