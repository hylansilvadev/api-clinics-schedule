import { Connection } from 'mongoose';
import { ScheduleSchema } from './schemas/schedule.schema';

export const ScheduleProvider = [
  {
    provide: 'SCHEDULE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Schedule', ScheduleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
