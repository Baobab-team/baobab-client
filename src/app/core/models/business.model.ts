import { Log } from './log.model';
import { Phone } from './phone.model';
import { Search } from './search.model';

export enum BUSINESS_LANGUAGE {
  FRENCH = 'francais',
  ENGLISH = 'english',
  SPAIN = 'english',
}

export enum BUSINESS_PAYMENT_TYPES {
  NOTHING = 'nothing',
  CREDIT = 'credit',
  DEBIT = 'debit',
  CASH = 'cash',
  CRYPTO = 'crypto'
}

export enum BUSINESS_SOCIAL_LINKS {
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  SNAPCHAT = 'snapchat'
}

export enum BUSINESS_STATUSES {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REFUSED = 'refused'
}

export enum BUSINESS_DAYS_WEEK {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday'
}

export class Category {
  id?: number;
  name: string;
}

export class BusinessHour {
  id?: number;
  businessId: number;
  day: BUSINESS_DAYS_WEEK;
  // tslint:disable-next-line: variable-name
  closing_time: string;
  // tslint:disable-next-line: variable-name
  opening_time: string;
}

export interface SocialLink {
  readonly id?: number;
  link: string;
  type: BUSINESS_SOCIAL_LINKS;
}

export interface Business {
  readonly id?: number;
  phone?: Phone[];
  category: Category;
  name: string;
  description: string;
  notes: string;
  website: string;
  email: string;
  // slogan?: string;
  // language: BUSINESS_LANGUAGE;
  capacity?: number;
  createdAt: string;
  updatetedAt?: string;
  acceptedAt: string;
  deletedAt?: string;
  // paymentType: BUSINESS_PAYMENT_TYPES;
  status: BUSINESS_STATUSES;
  social_links: BUSINESS_SOCIAL_LINKS;
}

export interface BusinessState {
  data?: Business[];
  search?: Search;
  businessId: number;
  business: Business;
  loading: boolean;
  loaded: boolean;
  log: Log;
}

export interface CategoryState {
  data: Category[];
  loading: boolean;
  loaded: boolean;
  log: Log;
}
