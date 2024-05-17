import { Module } from '@nestjs/common';
import { ClinicModule } from '../clinic/clinic.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClinicModule,
    ScheduleModule,
    DatabaseModule,
  ],
})
export class AppModule {}
