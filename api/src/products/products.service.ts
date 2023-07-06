import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/models/product.model';
import { ProductParams } from 'src/products/models/productParams.model';
import { Repository } from 'typeorm';
import { Brand } from './models/brand.model';

import { seedBrands, seedProducts } from './seed/seedData';

@Injectable()
export class ProductsService {
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

  async getProducts(query: ProductParams) {
    let products = await this.productRepository.find();

    if (query.brand) {
      products = products.filter(
        (product) => product.brand.name === query.brand,
      );
    }

    if (query.search) {
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.search.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(query.search.toLowerCase()),
      );
    }

    return products;
  }
}
