import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateClinicDto } from './dto/update-clinic.dto';
// import { UpdateClinicDto } from './dto/update-clinic.dto';

@ApiTags('Clinic')
@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post()
  async create(@Body() createClinicDto: CreateClinicDto) {
    return this.clinicService.create(createClinicDto);
  }

  @Get()
  async findAll() {
    return this.clinicService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clinicService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTestDto: UpdateClinicDto,
  ) {
    return this.clinicService.update(id, updateTestDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.clinicService.remove(id);
  }
}
