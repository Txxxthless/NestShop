import { Brand } from '../models/brand.model';
import { Product } from '../models/product.model';

export const seedProducts: Product[] = [
  {
    name: 'Nike Sport Boots',
    brand: new Brand(1, 'Nike'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum libero ut augue ultricies, eu ornare risus vestibulum. Sed pharetra a erat in blandit. Proin id sagittis nulla. Sed vesti.',
    price: 120,
    pictureUrl: 'http://localhost:5000/images/nike-sport-boots.png',
  },
  {
    name: 'Nike Coat',
    brand: new Brand(1, 'Nike'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum libero ut augue ultricies, eu ornare risus vestibulum. Sed pharetra a erat in blandit. Proin id sagittis nulla. Sed vesti.',
    price: 190,
    pictureUrl: 'http://localhost:5000/images/nike-coat.png',
  },
  {
    name: 'Nike Gloves',
    brand: new Brand(1, 'Nike'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum libero ut augue ultricies, eu ornare risus vestibulum. Sed pharetra a erat in blandit. Proin id sagittis nulla. Sed vesti.',
    price: 30,
    pictureUrl: 'http://localhost:5000/images/nike-gloves.png',
  },
  {
    name: 'Adidas Bag',
    brand: new Brand(2, 'Adidas'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum libero ut augue ultricies, eu ornare risus vestibulum. Sed pharetra a erat in blandit. Proin id sagittis nulla. Sed vesti.',
    price: 90,
    pictureUrl: 'http://localhost:5000/images/adidas-bag.png',
  },
  {
    name: 'Adidas Sport Boots',
    brand: new Brand(2, 'Adidas'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum libero ut augue ultricies, eu ornare risus vestibulum. Sed pharetra a erat in blandit. Proin id sagittis nulla. Sed vesti.',
    price: 130,
    pictureUrl: 'http://localhost:5000/images/adidas-sport-boots.png',
  },
  {
    name: 'New Balance Coat',
    brand: new Brand(3, 'New Balance'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum libero ut augue ultricies, eu ornare risus vestibulum. Sed pharetra a erat in blandit. Proin id sagittis nulla. Sed vesti.',
    price: 130,
    pictureUrl: 'http://localhost:5000/images/new-balance-coat.png',
  },
  {
    name: 'New Balance Gloves',
    brand: new Brand(3, 'New Balance'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum libero ut augue ultricies, eu ornare risus vestibulum. Sed pharetra a erat in blandit. Proin id sagittis nulla. Sed vesti.',
    price: 25,
    pictureUrl: 'http://localhost:5000/images/new-balance-gloves.png',
  },
];

export const seedBrands: Brand[] = [
  new Brand(1, 'Nike'),
  new Brand(2, 'Adidas'),
  new Brand(3, 'New Balance'),
];
