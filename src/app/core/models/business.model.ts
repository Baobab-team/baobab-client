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

export class Business {
  protected id?: number;
  protected phone?: Phone[];
  protected category?: Category;
  @required({message: 'admin.business.message_errors.name_required'})
  @trim()
  protected name: string;
  // @alphaNumeric({message: 'admin.business.message_errors.description_alpha'})
  @prop()
  @trim()
  protected description: string;
  // @alphaNumeric({message: 'admin.business.message_errors.note_alpha'})
  @prop()
  @trim()
  protected note: string;
  @url({message: 'admin.business.message_errors.url_valid'})
  @trim()
  protected website: string;
  @trim()
  @email({message: 'admin.business.message_errors.email_valid'})
  @required({message: 'admin.business.message_errors.email_required'})
  protected email: string;
  @alphaNumeric({message: 'admin.business.message_errors.name_required'})
  @trim()
  protected slogan?: string;
  @required({message: 'admin.business.message_errors.language_required'})
  protected language: BUSINESS_LANGUAGE;
  @numeric({message: 'admin.business.message_errors.numeric_valid'})
  protected capacity?: number;
  protected createdAt: string;
  protected updatetedAt?: string;
  protected acceptedAt: string;
  protected deletedAt?: string;
  @required({message: 'admin.business.message_errors.payment_type_required'})
  protected paymentType: BUSINESS_PAYMENT_TYPES;
  protected status: BUSINESS_STATUSES;

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
    status?: BUSINESS_STATUSES
  ) {
    this.id = id;
    this.phone = phone;
    this.category = category;
    this.capacity = capacity;
    this.name = name;
    this.description = description;
    this.note = note;
    this.website = website;
    this.email = email;
    this.acceptedAt = acceptedAt;
    this.slogan = slogan;
    this.language = language;
    this.createdAt = createdAt;
    this.updatetedAt = updatetedAt;
    this.deletedAt = deletedAt;
    this.paymentType = paymentType;
    this.status = status;
  }
}
