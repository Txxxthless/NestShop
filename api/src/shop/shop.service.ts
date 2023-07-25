import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/shop/models/product.model';
import { ProductParams } from 'src/shop/models/productParams.model';
import { Repository } from 'typeorm';
import { Brand } from './models/brand.model';
import { PAGE_SIZE } from './constants/constants';

import { seedBrands, seedProducts } from './seed/seedData';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
  ) {}

  seedData() {
    this.brandRepository
      .save(seedBrands)
      .then(() => console.log('Brands seeded'));
    this.productRepository
      .save(seedProducts)
      .then(() => console.log('Products seeded'));
  }

  addProduct(product: Product) {
    console.log(product);
    this.productRepository.save(product);
  }

  async getProduct(id: number) {
    const product = await this.productRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        brand: true,
      },
    });

    return product;
  }

  async getProducts(query: ProductParams) {
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    queryBuilder.innerJoinAndSelect('product.brand', 'brand');

    if (query.brand) {
      queryBuilder.where('LOWER(brand.name) = :brandName', {
        brandName: query.brand.toLowerCase(),
      });
    }

    if (query.search) {
      if (query.brand) {
        queryBuilder.andWhere('LOWER(product.name) LIKE :name', {
          name: `%${query.search.toLowerCase()}%`,
        });
      } else {
        queryBuilder.where('LOWER(product.name) LIKE :name', {
          name: `%${query.search.toLowerCase()}%`,
        });
      }
    }

    if (query.page) {
      queryBuilder.skip((query.page - 1) * PAGE_SIZE);
    }

    let products = await queryBuilder.take(PAGE_SIZE).getMany();

    return products;
  }

  async getBrands() {
    return await this.brandRepository.find();
  }
}
