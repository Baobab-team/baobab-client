import { Business } from './business.model';

export class Plate {
  id?: number;
  menuId: number;
  nom: string;
  price: number;
  description: string;
}

export class Menu {
  id?: number;
  RestaurantId: number;
  name: string;
}

export class Restaurant extends Business {
}
