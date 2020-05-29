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
  year: {
    type: Number,
  },
  total: {
    type: Number,
  },
  density: {
    type: Number,
  },
});
export const PhraseSchema = new Schema({
  origin: {
    type: String,
  },
  transcript: {
    type: String,
  },
  bg: {
    type: String,
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
export const QuoteSchema = new Schema({
  quote: {
    type: String,
  },
  author: {
    type: String,
  },
});
