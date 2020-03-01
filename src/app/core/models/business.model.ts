import {
  required,
  alphaNumeric,
  trim,
  email,
  numeric,
  url
} from '@rxweb/reactive-form-validators';

export enum LANGUAGE {
  FRENCH = 'Francais',
  ENGLISH = 'English'
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

export enum DAYS_WEEK {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY'
}

export function values() {
  return Object.keys(BUSINESS_PAYMENT_TYPES).filter(
    (type) => isNaN(type as any) && type !== 'values'
  );
}

export class Category {
  id?: number;
  name: string;
}

export class BusinessHour {
  id?: number;
  businessId: number;
  day: DAYS_WEEK;
  closingTime: string;
  openingTime: string;
}

export class Business {
  protected id?: number;
  protected phoneId?: number;
  protected categoryId?: number;
  protected restaurantId?: number;
  @required({message: 'admin.restaurant.message_errors.name_required'})
  @trim()
  protected name: string;
  @alphaNumeric()
  @trim()
  protected description: string;
  @alphaNumeric()
  @trim()
  protected note: string;
  @url({message: 'admin.restaurant.message_errors.url_valid'})
  @trim()
  protected website: string;
  @trim()
  @email({message: 'admin.restaurant.message_errors.email_valid'})
  @required({message: 'admin.restaurant.message_errors.email_required'})
  protected email: string;
  @alphaNumeric()
  @trim()
  protected slogan?: string;
  protected language: LANGUAGE;
  @numeric({message: 'admin.restaurant.message_errors.numeric_valid'})
  protected capacity?: number;
  protected createdAt: string;
  protected updatetedAt?: string;
  protected acceptedAt: string;
  protected deletedAt?: string;
  @required({message: 'admin.restaurant.message_errors.payment_type_valid'})
  protected paymentType: BUSINESS_PAYMENT_TYPES;
  protected status: BUSINESS_STATUSES;

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
    paymentType?: BUSINESS_PAYMENT_TYPES,
    status?: BUSINESS_STATUSES
  ) {
    this.id = id;
    this.phoneId = phoneId;
    this.categoryId = categoryId;
    this.capacity = capacity;
    this.restaurantId = restaurantId;
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
