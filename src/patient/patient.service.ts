import { Inject, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Model } from 'mongoose';
import { Patient } from './interface/patient.interface';

@Injectable()
export class PatientService {
  constructor(
    @Inject('PATIENT_MODEL') private readonly patientModel: Model<Patient>,
  ) {}
  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const createdPatient = this.patientModel.create(createPatientDto);
    return createdPatient;
  }

  async findAll(): Promise<Patient[]> {
    return this.patientModel.find().exec();
  }

  async findOne(id: string): Promise<Patient> {
    return this.patientModel.findById(id);
  }

  async update(
    id: string,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    const updatedPatient = this.patientModel.findByIdAndUpdate(
      id,
      updatePatientDto,
    );
    return updatedPatient;
  }

  async remove(id: string) {
    await this.patientModel.findByIdAndDelete(id);
  }
}
