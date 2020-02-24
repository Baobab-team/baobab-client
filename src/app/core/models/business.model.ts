export enum LANGUAGE {
  FRENCH = 'Francais',
  ENGLISH = 'English'
}

export enum CATEGORY_BUSINESS {
  RESTAURANT = 'Restaurant',
}

export function values() {
  return Object.keys(CATEGORY_BUSINESS).filter(
    (type) => isNaN(type as any) && type !== 'values'
  );
}

export class Business {
  id?: number;
  name: number;
  description: string;
  website: string;
  email: string;
  acceptedAt: string;
  slogan?: string;
  language: LANGUAGE;
  maximalCapacity: number;
  logo?: string;
  createdAt: string;
  updatetedAt?: string;
  deletedAt?: string;
  category: CATEGORY_BUSINESS;
}

export class Restaurant extends Business {
  id?: number;
}
