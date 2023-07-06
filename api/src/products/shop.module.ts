import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product.model';
import { Brand } from './models/brand.model';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand])],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [ShopService],
})
export class ShopModule {}
