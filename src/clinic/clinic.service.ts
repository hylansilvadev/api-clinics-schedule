import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Clinic } from './interface/clinic.interface';
import { CreateClinicDto } from './dto/create-clinic.dto';

@Injectable()
export class ClinicService {
  constructor(
    @Inject('CLINIC_MODEL') private readonly clinicModel: Model<Clinic>,
  ) {}

  async create(createClinicDto: CreateClinicDto): Promise<Clinic> {
    const createdClinic = this.clinicModel.create(createClinicDto);
    return createdClinic;
  }

  async findAll(): Promise<Clinic[]> {
    return this.clinicModel.find().exec();
  }
}
