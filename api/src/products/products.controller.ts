import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Product } from './models/product.model';
import { ProductParams } from './models/productParams.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(@Query() query: ProductParams) {
    return this.productService.getProducts(query);
  }

  @Post()
  addProduct(@Body() body: Product) {
    this.productService.addProduct(body);
  }
}
