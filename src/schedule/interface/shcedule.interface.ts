import { Document } from 'mongoose';

export interface Schedule extends Document {
  readonly clinic_id: string;
  readonly datetime: Date;
  readonly doctor_responsible: string;
  readonly patient_id: string;
  readonly created_at: Date;
}

export interface ViewListShedulesByClinicId extends Document {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly responsible_person: {
    readonly name: string;
    readonly profission: string;
  };
  readonly list_schedules: Schedule[];
}
