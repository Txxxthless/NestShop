import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/models/product.model';
import { Brand } from './products/models/brand.model';
import { Repository } from 'typeorm';
import { ProductsService } from './products/products.service';

@Module({
  imports: [
    ProductsModule,
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
    private productsService: ProductsService,
  ) {
    this.repositoriesEmpty().then((result) => {
      if (result) {
        this.productsService.seedData();
      }
    });
  }

  async repositoriesEmpty(): Promise<boolean> {
    const productCount = await this.productRepository.count();
    const brandCount = await this.brandRepository.count();
    return productCount === 0 || brandCount === 0;
  }
}
