import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ScheduleProvider } from './schedule.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ScheduleController],
  providers: [ScheduleService, ...ScheduleProvider],
})
export class ScheduleModule {}
