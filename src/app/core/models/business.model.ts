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

export class Category {
  id?: number;
  name: string;
  children: Category[];
}

export class BusinessHour {
  id?: number;
  day: number;
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

export interface Tag {
  readonly id: number;
  name: string;
}

export interface Address {
  readonly id: number;
  street_number: string;
  street_type: string;
  street_name: string;
  direction: string;
  city: string;
  zip_code: string;
  province: string;
  country: string;
}

export interface Business {
  readonly id?: number;
  phones?: Phone[];
  category: Category;
  name: string;
  slug: string;
  description: string;
  notes: string;
  website: string;
  email: string;
  // slogan?: string;
  // language: BUSINESS_LANGUAGE;
  capacity?: number;
  created_at: string;
  updateted_at?: string;
  accepted_at: string;
  deleted_at?: string;
  // paymentType: BUSINESS_PAYMENT_TYPES;
  status: BUSINESS_STATUSES;
  social_links: {
    id: number,
    type: BUSINESS_SOCIAL_LINKS,
    link: string
  }[];
  tags: Tag[];
  addresses: Address[];
  payment_types: string[];
  business_hours: BusinessHour[];
}

export interface BusinessState {
  data?: any;
  search?: Search;
  autocompleteData: string[];
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
