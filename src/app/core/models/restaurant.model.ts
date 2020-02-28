import {
  Business,
  LANGUAGE,
  PAYMENT_TYPE_BUSINESS,
  STATUS_BUSINESS
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
    phoneId?: number,
    categoryId?: number,
    restaurantId?: number,
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
    language?: LANGUAGE,
    paymentType?: PAYMENT_TYPE_BUSINESS,
    status?: STATUS_BUSINESS,
    menuId?: number
  ) {
    super(
      id,
      phoneId,
      categoryId,
      restaurantId,
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
