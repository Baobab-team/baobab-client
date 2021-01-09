import { propObject, required } from '@rxweb/reactive-form-validators';
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

export class Address {
  readonly id: number;
  app_office_number: number;
  street_number: string;
  street_type: string;
  street_name: string;
  direction: string;
  city: string;
  zip_code: string;
  province: string;
  country: string;

  constructor(){}
}

export class Business {
  readonly id?: number;
  phones?: Phone[];
  category: Category;
  @required()
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

  constructor(){
    this.addresses = [new Address()]
  }
}


export class BusinessSuggestion {
  email: string;
  name: string;
  business : Business;

  constructor(name: string, email: string, business: Business){
    this.email = email;
    this.name = name;
    this.business = business;
  }
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

export interface BusinessSuggestionState {
  data: BusinessSuggestion[];
  loading: boolean;
  loaded: boolean;
  log: Log;
}
