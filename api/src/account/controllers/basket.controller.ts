import {
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { BasketService } from '../services/basket.service';

@UseGuards(AuthGuard)
@Controller('basket')
export class BasketController {
  constructor(private basketService: BasketService) {}

  @Post('add')
  addProductToBasket(@Query() { productId }, @Request() { user }) {
    return this.basketService.addProduct(+productId, user);
  }

  @Post('remove')
  removeProductFromBasket(@Query() { productId }, @Request() { user }) {
    return this.basketService.removeProduct(+productId, user);
  }

  @Get()
  getBasket(@Request() { user }) {
    return this.basketService.getBasket(user);
  }
}
