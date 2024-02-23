import path from 'path';
import { fileURLToPath } from 'url';

import { faker } from '@faker-js/faker';

import bcrypt from 'bcrypt';

//Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

//Clase manejo de excepciones
export class Exception extends Error {
  constructor(message, status) {
    super(message);
    this.statusCode = status;
  }
};

//hash y validacion
export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (password, user) => bcrypt.compareSync(password, user.password);

//mocking
export const generateProducts = () => {
  return {
    title: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    code: faker.string.alphanumeric(6),
    price: faker.commerce.price(),
    status: faker.datatype.boolean() ? 'Disponible' : 'No disponible',
    stock: faker.number.int({ min: 1, max: 100 }),
    category: faker.commerce.department(),
    thumbnail: faker.image.url(),
    availability: faker.datatype.boolean()
  };
};