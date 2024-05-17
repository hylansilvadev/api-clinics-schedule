import { Document } from 'mongoose';

export interface Schedule extends Document {
  readonly clinic_id: string;
  readonly datetime: Date;
  readonly doctor_responsible: string;
  readonly patient_id: string;
  readonly created_at: Date;
}
