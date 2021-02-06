import { digit, prop, unique } from "@rxweb/reactive-form-validators";

export class Phone {
  id?: number;
  type: string;
  businessId?: number;
  @prop()
  @unique()
  number: string;
  @digit()
  extension: string;
}
