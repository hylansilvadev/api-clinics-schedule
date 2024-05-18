import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
  }

  @Get()
  async findAll() {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.scheduleService.finById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    await this.scheduleService.deleteById(id);
  }
}
