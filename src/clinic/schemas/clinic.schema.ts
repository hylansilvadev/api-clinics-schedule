import * as mongoose from 'mongoose';

export const ClinicSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: {
    address: String,
    city: String,
    lat: Number,
    long: Number,
    neighbourhood: String,
    region: String,
    state: String,
    zip_code: String,
  },
  responsible_person: {
    name: String,
    profission: String,
  },
  created_at: Date,
});
