import { Inject, Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Schedule } from './interface/shcedule.interface';
import { Model } from 'mongoose';

@Injectable()
export class ScheduleService {
  constructor(
    @Inject('SCHEDULE_MODEL') private readonly scheduleModel: Model<Schedule>,
  ) {}
  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    const createdSchedule = this.scheduleModel.create(createScheduleDto);
    return createdSchedule;
  }

  async findAll() {
    return this.scheduleModel.find().exec();
  }
}
