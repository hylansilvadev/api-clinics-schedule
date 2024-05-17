import * as mongoose from 'mongoose';

export const ScheduleSchema = new mongoose.Schema({
  clinic_id: String,
  doctor_responsible: String,
  patient_id: String,
  created_at: Date,
});
