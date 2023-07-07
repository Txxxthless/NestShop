import { Brand } from '../models/brand.model';
import { Product } from '../models/product.model';

export const seedProducts: Product[] = [
  {
    name: 'Nike Sport Boots',
    brand: new Brand(1, 'Nike'),
    description: 'Nice sport boots',
    price: 120,
  },
  {
    name: 'Nike Coat',
    brand: new Brand(1, 'Nike'),
    description: 'Nice coat',
    price: 190,
  },
  {
    name: 'Nike Gloves',
    brand: new Brand(1, 'Nike'),
    description: 'Warn gloves',
    price: 30,
  },
  {
    name: 'Adidas Bag',
    brand: new Brand(2, 'Adidas'),
    description: 'Nice sport bag',
    price: 90,
  },
  {
    name: 'Adidas Sport Boots',
    brand: new Brand(2, 'Adidas'),
    description: 'Nice sport boots',
    price: 130,
  },
  {
    name: 'New Balance Coat',
    brand: new Brand(3, 'New Balance'),
    description: 'Nice coat',
    price: 130,
  },
  {
    name: 'New Balance Gloves',
    brand: new Brand(3, 'New Balance'),
    description: 'Warn gloves',
    price: 25,
  },
];

export const seedBrands: Brand[] = [
  new Brand(1, 'Nike'),
  new Brand(2, 'Adidas'),
  new Brand(3, 'New Balance'),
];
