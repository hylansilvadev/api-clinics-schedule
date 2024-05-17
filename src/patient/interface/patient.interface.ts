import { Document } from 'mongoose';

export interface Patient extends Document {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly has_avc: boolean;
  readonly investment_value: number;
  readonly another_condition: [];
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
  readonly created_at: Date;
  readonly updated_at: null;
}
