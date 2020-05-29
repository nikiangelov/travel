import mongoose from 'mongoose';
import { CoordinatesSchema, TicketsTypeSchema } from './GlobalTypes';
const Schema = mongoose.Schema;

const AttractionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  is_translated: {
    type: Boolean,
  },
  description_short: {
    type: String,
  },
  city_code: {
    type: String,
  },
  city_url_slug: {
    type: String,
  },
  country_code: {
    type: String,
  },
  wikipedia_article_url: {
    type: String,
  },
  coordinates: {
    type: CoordinatesSchema,
  },
  phone: {
    type: String,
  },
  work_time_description: {
    type: String,
  },
  is_free: {
    type: Boolean,
  },
  tickets: {
    type: TicketsTypeSchema,
  },
});

const Attraction =
  mongoose.models.Attraction || mongoose.model('Attraction', AttractionSchema);
export default Attraction;
