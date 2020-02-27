export enum LANGUAGE {
  FRENCH = 'Francais',
  ENGLISH = 'English'
}

// export enum CATEGORY_BUSINESS {
//   RESTAURANT = 'Restaurant',
// }

export enum PAYMENT_TYPE_BUSINESS {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  CASH = 'CASH',
  CRYPTO = 'CRYPTO'
}

export enum SOCIAL_LINK {
  FACEBOOK = 'FACEBOOK',
  TWITTER = 'TWITTER',
  INSTAGRAM = 'INSTAGRAM'
}

export enum STATUS_BUSINESS {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  CASH = 'CASH',
  CRYPTO = 'CRYPTO'
}

export enum DAYS_WEEK {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY'
}

// export function values() {
//   return Object.keys(CATEGORY_BUSINESS).filter(
//     (type) => isNaN(type as any) && type !== 'values'
//   );
// }

export class Category {
  id?: number;
  name: string;
  businessId?: number;
}

export class BusinessHour {
  id?: number;
  businessId: number;
  day: DAYS_WEEK;
  closingTime: string;
  openingTime: string;
}

export class Business {
  id?: number;
  phoneId?: number;
  categoryId?: number;
  restaurantId?: number;
  name: number;
  description: string;
  note: string;
  website: string;
  email: string;
  acceptedAt: string;
  slogan?: string;
  language: LANGUAGE;
  capacity: number;
  logo?: string;
  createdAt: string;
  updatetedAt?: string;
  deletedAt?: string;
  paymentType: PAYMENT_TYPE_BUSINESS;
  status: STATUS_BUSINESS;
}
