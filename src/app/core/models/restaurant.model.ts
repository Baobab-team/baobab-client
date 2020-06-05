import { Business } from '@Models/business.model';

export interface Plate {
  id?: number;
  menu?: Menu;
  nom: string;
  price: number;
  description: string;
}

export interface Menu {
  id?: number;
  Restaurant?: Restaurant;
  name: string;
}

export interface Restaurant extends Business {
  menu?: Menu;
}

