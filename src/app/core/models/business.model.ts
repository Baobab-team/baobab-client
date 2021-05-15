import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { prop, propObject, required, url, email,propArray } from '@rxweb/reactive-form-validators';
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
  @prop()
  id?: number;
  @required()
  @prop()
  name: string;
  @prop()
  slug: string;
  @prop()
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
  @prop()
  app_office_number: number;
  @prop()
  street_number: string;
  @prop()
  street_type: string;
  @prop()
  street_name: string;
  @prop()
  direction: string;
  @prop()
  city: string;
  @prop()
  zip_code: string;
  @prop()
  province: string;
  @prop()
  country: string;

  constructor(){}
}

export class Business {
  readonly id?: number;
  phones: Phone[];
  @prop()
  category: Category;
  @prop()
  @required()
  name: string;
  slug: string;
  @prop()
  description: string;
  notes: string;
  @url()
  website: string;
  @email()
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
  @propArray(Address)
  addresses: Address[];
  payment_types: string[];
  business_hours: BusinessHour[];
}


export class BusinessSuggestion {
  @email()
  @prop()
  @required()
  email: string;
  @prop()
  @required()
  name: string;
  @prop()
  is_owner: boolean
  @propObject(Business)
  business : Business;

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


export interface BusinessSuggestionState {
  data: any;
  businessSuggestion: BusinessSuggestion
  log: Log;
  error: HttpErrorResponse;
}

export interface CategoryState {
  data: Category[];
  loading: boolean;
  loaded: boolean;
  log: Log;
}
