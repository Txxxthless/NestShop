import { Module } from '@nestjs/common';
import { ShopModule } from './shop/shop.module';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './shop/models/product.model';
import { Brand } from './shop/models/brand.model';
import { Repository } from 'typeorm';
import { ShopService } from './shop/shop.service';

@Module({
  imports: [
    ShopModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'shopdb.sqlite',
      entities: [Product, Brand],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, Brand]),
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
