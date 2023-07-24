import { Module } from '@nestjs/common';
import { ShopModule } from './shop/shop.module';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './shop/models/product.model';
import { Brand } from './shop/models/brand.model';
import { Repository } from 'typeorm';
import { ShopService } from './shop/shop.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './account/account.module';
import { User } from './account/models/user.model';
import { Basket } from './account/models/basket.model';
import { Order } from './account/models/order.model';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ShopModule,
    AccountModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'shopdb.sqlite',
      entities: [Product, Brand, User, Basket, Order],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, Brand]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    AccountModule,
    PaymentModule,
  ],
})
export class AppModule {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
    private shopService: ShopService,
  ) {
    this.repositoriesEmpty().then((result) => {
      if (result) {
        this.shopService.seedData();
      }
    });
  }

  async repositoriesEmpty(): Promise<boolean> {
    const productCount = await this.productRepository.count();
    const brandCount = await this.brandRepository.count();
    return productCount === 0 || brandCount === 0;
  }
}
