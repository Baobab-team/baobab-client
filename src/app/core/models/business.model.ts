import { Business } from './business.model';
import { Phone } from './phone.model';
import {
  required,
  alphaNumeric,
  trim,
  email,
  numeric,
  url,
  prop,
  alpha
} from '@rxweb/reactive-form-validators';
import { Search } from './search.model';

export enum BUSINESS_LANGUAGE {
  FRENCH = 'Francais',
  ENGLISH = 'English',
  SPAIN = 'English',
}

// export enum CATEGORY_BUSINESS {
//   RESTAURANT = 'Restaurant',
// }

export enum BUSINESS_PAYMENT_TYPES {
  NOTHING = 'NOTHING',
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  CASH = 'CASH',
  CRYPTO = 'CRYPTO'
}

export enum BUSINESS_SOCIAL_LINKS {
  FACEBOOK = 'FACEBOOK',
  TWITTER = 'TWITTER',
  INSTAGRAM = 'INSTAGRAM'
}

export enum BUSINESS_STATUSES {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REFUSED = 'REFUSED'
}

export enum BUSINESS_DAYS_WEEK {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY'
}

// export function businessPaymentTypesValues() {
//   return Object.keys(BUSINESS_PAYMENT_TYPES).filter(
//     (type) => isNaN(type as any) && type !== 'values'
//   );
// }

export class Category {
  id?: number;
  name: string;
}

export class BusinessHour {
  id?: number;
  businessId: number;
  day: BUSINESS_DAYS_WEEK;
  closingTime: string;
  openingTime: string;
}

export interface Business {
  readonly id?: number;
  phone?: Phone[];
  category?: Category;
  name: string;
  description: string;
  note: string;
  website: string;
  email: string;
  slogan?: string;
  language: BUSINESS_LANGUAGE;
  capacity?: number;
  createdAt: string;
  updatetedAt?: string;
  acceptedAt: string;
  deletedAt?: string;
  paymentType: BUSINESS_PAYMENT_TYPES;
  status: BUSINESS_STATUSES;
}

export interface BusinessState {
  data?: Business[];
  search?: Search;
  loading: boolean;
  loaded: boolean;
}

export interface CategoryState {
  data: Category[];
  loading: boolean;
  loaded: boolean;
}
