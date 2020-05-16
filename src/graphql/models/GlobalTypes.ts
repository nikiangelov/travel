import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const CoordinatesSchema = new Schema({
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
});
export const PopulationSchema = new Schema({
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
});
export const QualityOfLifeSchema = new Schema({
  total: {
    type: Number,
  },
  safety: {
    type: Number,
  },
  healt_care: {
    type: Number,
  },
  pollution: {
    type: Number,
  },
  climate: {
    type: Number,
  },
});
export const TicketsTypeSchema = new Schema({
  adult: {
    type: Number,
  },
  reduced: {
    type: Number,
  },
  currency: {
    type: String,
  },
});
