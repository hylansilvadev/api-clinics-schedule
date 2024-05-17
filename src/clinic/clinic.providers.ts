import { Connection } from 'mongoose';
import { ClinicSchema } from './schemas/clinic.schema';

export const ClinicProvider = [
  {
    provide: 'CLINIC_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Clinic', ClinicSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
