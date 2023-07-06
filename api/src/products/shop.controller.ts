import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Product } from './models/product.model';
import { ProductParams } from './models/productParams.model';
import { ShopService } from './shop.service';

@Controller()
export class ShopController {
  constructor(private shopService: ShopService) {}

  @Get('products')
  getProducts(@Query() query: ProductParams) {
    return this.shopService.getProducts(query);
  }

  @Post('products')
  addProduct(@Body() body: Product) {
    this.shopService.addProduct(body);
  }

  @Get('brands')
  getBrands() {
    return this.shopService.getBrands();
  }
}
