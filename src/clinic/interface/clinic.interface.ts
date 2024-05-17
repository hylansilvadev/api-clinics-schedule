import { Document } from 'mongoose';

export interface Clinic extends Document {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly address: {
    readonly address: string;
    readonly city: string;
    readonly lat: number;
    readonly long: number;
    readonly neighbourhood: string;
    readonly region: string;
    readonly state: string;
    readonly zip_code: string;
  };
  readonly responsible_person: {
    readonly name: string;
    readonly profission: string;
  };
  readonly created_at: Date;
}
