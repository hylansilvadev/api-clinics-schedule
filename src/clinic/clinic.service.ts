import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Clinic } from './interface/clinic.interface';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';

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

  async findOne(id: string): Promise<Clinic> {
    return this.clinicModel.findById(id);
  }

  async update(id: string, updatePatientDto: UpdateClinicDto): Promise<Clinic> {
    const updatedClinic = this.clinicModel.findByIdAndUpdate(
      id,
      updatePatientDto,
    );
    return updatedClinic;
  }

  async remove(id: string) {
    await this.clinicModel.findByIdAndDelete(id);
  }
}
