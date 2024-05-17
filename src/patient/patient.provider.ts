import { Connection } from 'mongoose';
import { PatientSchema } from './schemas/patient.schema';

export const PatientProvider = [
  {
    provide: 'PATIENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Patient', PatientSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
