import { Phone } from './phone.model';
import {
  Business,
  BUSINESS_LANGUAGE,
  BUSINESS_STATUSES,
  BUSINESS_PAYMENT_TYPES,
  Category
} from './business.model';


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
  menuId: number;

  constructor(
    id?: number,
    phone?: Phone[],
    category?: Category,
    capacity?: number,
    createdAt?: string,
    updatetedAt?: string,
    deletedAt?: string,
    slogan?: string,
    name?: string,
    description?: string,
    note?: string,
    website?: string,
    email?: string,
    acceptedAt?: string,
    language?: BUSINESS_LANGUAGE,
    paymentType?: BUSINESS_PAYMENT_TYPES,
    status?: BUSINESS_STATUSES,
    menuId?: number
  ) {
    super(
      id,
      phone,
      category,
      capacity,
      createdAt,
      updatetedAt,
      deletedAt,
      slogan,
      name,
      description,
      note,
      website,
      email,
      acceptedAt,
      language,
      paymentType,
      status
    );
    this.menuId = menuId;
  }
}
