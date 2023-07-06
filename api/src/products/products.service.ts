import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/models/product.interface';
import { ProductParams } from 'src/products/models/productParams.interface';

@Injectable()
export class ProductsService {
  products: Product[] = [
    {
      name: 'Boots',
      brand: 'Nike',
      price: 120,
      description: 'Hello world!',
    },
    {
      name: 'Coat',
      brand: 'Adidas',
      price: 145,
      description: 'Hello world!',
    },
  ];

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProducts(query: ProductParams) {
    let productsToReturn = this.products.slice();

    if (query.name) {
      productsToReturn = this.products.filter(
        (product) => product.name === query.name,
      );
    }

    if (query.brand) {
      productsToReturn = productsToReturn.filter(
        (product) => product.brand === query.brand,
      );
    }

    return productsToReturn;
  }
}
