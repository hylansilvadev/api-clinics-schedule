import { Inject, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Model } from 'mongoose';
import { Patient } from './interface/patient.interface';

@Injectable()
export class PatientService {
  constructor(
    @Inject('PATIENT_MODEL') private readonly clinicModel: Model<Patient>,
  ) {}
  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const createdPatient = this.clinicModel.create(createPatientDto);
    return createdPatient;
  }

  async findAll(): Promise<Patient[]> {
    return this.clinicModel.find().exec();
  }
}
