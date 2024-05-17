import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { ApiTags } from '@nestjs/swagger';
// import { UpdateClinicDto } from './dto/update-clinic.dto';

@ApiTags('Clinic')
@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post()
  create(@Body() createClinicDto: CreateClinicDto) {
    return this.clinicService.create(createClinicDto);
  }

  @Get()
  findAll() {
    return this.clinicService.findAll();
  }
}
