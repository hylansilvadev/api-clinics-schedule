import { Inject, Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Schedule } from './interface/shcedule.interface';
import { Model } from 'mongoose';
import { Patient } from 'src/patient/interface/patient.interface';
import { Clinic } from 'src/clinic/interface/clinic.interface';

@Injectable()
export class ScheduleService {
  constructor(
    @Inject('SCHEDULE_MODEL') private readonly scheduleModel: Model<Schedule>,
    @Inject('PATIENT_MODEL') private readonly patientModel: Model<Patient>,
    @Inject('CLINIC_MODEL') private readonly clinicModel: Model<Clinic>,
  ) {}
  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    const createdSchedule = this.scheduleModel.create(createScheduleDto);
    return createdSchedule;
  }

  async findAll(): Promise<Schedule[]> {
    return this.scheduleModel.find().exec();
  }

  async finById(id: string) {
    let response_object: any = {};
    const request_schedule = await this.scheduleModel.findById(id);

    if (request_schedule) {
      response_object = request_schedule.toObject();

      if (request_schedule.patient_id) {
        const request_patient = await this.patientModel.findById(
          request_schedule.patient_id,
        );
        if (request_patient) {
          response_object.patient = request_patient.toObject();
        }
      }

      if (request_schedule.clinic_id) {
        const request_clinic = await this.clinicModel.findById(
          request_schedule.clinic_id,
        );
        if (request_clinic) {
          response_object.clinic = request_clinic.toObject();
        }
      }
    }

    return response_object;
  }

  async deleteById(id: string) {
    await this.scheduleModel.findByIdAndDelete(id);
  }
}
