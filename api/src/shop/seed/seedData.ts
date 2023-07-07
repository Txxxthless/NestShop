import { Brand } from '../models/brand.model';
import { Product } from '../models/product.model';

export const seedProducts: Product[] = [
  {
    name: 'Nike Sport Boots',
    brand: new Brand(1, 'Nike'),
    description: 'Nice sport boots',
    price: 120,
    pictureUrl: 'http://localhost:5000/images/nike-sport-boots.png',
  },
  {
    name: 'Nike Coat',
    brand: new Brand(1, 'Nike'),
    description: 'Nice coat',
    price: 190,
    pictureUrl: 'http://localhost:5000/images/nike-coat.png',
  },
  {
    name: 'Nike Gloves',
    brand: new Brand(1, 'Nike'),
    description: 'Warn gloves',
    price: 30,
    pictureUrl: 'http://localhost:5000/images/nike-gloves.png',
  },
  {
    name: 'Adidas Bag',
    brand: new Brand(2, 'Adidas'),
    description: 'Nice sport bag',
    price: 90,
    pictureUrl: 'http://localhost:5000/images/adidas-bag.png',
  },
  {
    name: 'Adidas Sport Boots',
    brand: new Brand(2, 'Adidas'),
    description: 'Nice sport boots',
    price: 130,
    pictureUrl: 'http://localhost:5000/images/adidas-sport-boots.png',
  },
  {
    name: 'New Balance Coat',
    brand: new Brand(3, 'New Balance'),
    description: 'Nice coat',
    price: 130,
    pictureUrl: 'http://localhost:5000/images/new-balance-coat.png',
  },
  {
    name: 'New Balance Gloves',
    brand: new Brand(3, 'New Balance'),
    description: 'Warn gloves',
    price: 25,
    pictureUrl: 'http://localhost:5000/images/new-balance-gloves.png',
  },
];

export const seedBrands: Brand[] = [
  new Brand(1, 'Nike'),
  new Brand(2, 'Adidas'),
  new Brand(3, 'New Balance'),
];
