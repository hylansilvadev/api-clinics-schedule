import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ScheduleProvider } from './schedule.provider';
import { PatientProvider } from 'src/patient/patient.provider';
import { ClinicProvider } from 'src/clinic/clinic.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ScheduleController],
  providers: [
    ScheduleService,
    ...ScheduleProvider,
    ...PatientProvider,
    ...ClinicProvider,
  ],
})
export class ScheduleModule {}
