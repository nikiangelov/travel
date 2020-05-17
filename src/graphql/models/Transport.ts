import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
  title: {
    type: String,
  },
  value: {
    type: Number,
  },
  currency: {
    type: String,
  },
});
const PriceRangeSchema = new Schema({
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  currency: {
    type: String,
  },
});
export const TransportOptionSchema = new Schema({
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: [PriceSchema],
  },
  price_range: {
    type: PriceRangeSchema,
  },
});
export const TransportSchema = new Schema({
  options: [TransportOptionSchema],
});
