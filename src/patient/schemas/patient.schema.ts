import * as mongoose from 'mongoose';

export const PatientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  has_avc: Boolean,
  investment_value: Number,
  another_condition: Array,
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
  created_at: Date,
});
