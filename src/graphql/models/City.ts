import mongoose from 'mongoose';
import {
  PopulationSchema,
  CoordinatesSchema,
  QuoteSchema,
} from './GlobalTypes';
import { TransportSchema } from './Transport';
const Schema = mongoose.Schema;

const WorkHoursSchema = new Schema({
  start: {
    type: String,
  },
  end: {
    type: String,
  },
});
const MetroSchema = new Schema({
  map_image_url: {
    type: String,
  },
  map_image_page_url: {
    type: String,
  },
  map_attribution: {
    type: String,
  },
  map_attribution_html: {
    type: String,
  },
  attribution_required: {
    type: Boolean,
  },
  working_hours: {
    type: WorkHoursSchema,
  },
});
const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  history: {
    type: String,
  },
  history_en: {
    type: String,
  },
  sub_name: {
    type: String,
  },
  url_slug: {
    type: String,
  },
  iata_code: {
    type: String,
    required: true,
  },
  country_code: {
    type: String,
    required: true,
  },
  wiki_article_url: {
    type: String,
  },
  wiki_article_en_url: {
    type: String,
  },
  wiki_voyage_article_url: {
    type: String,
  },
  backdrop_image: {
    type: String,
  },
  featured_image_vertical: {
    type: String,
  },
  featured_image_thumb: {
    type: String,
  },
  population: {
    type: PopulationSchema,
  },
  coordinates: {
    type: CoordinatesSchema,
    required: true,
  },
  website: {
    type: String,
  },
  timezone: {
    type: String,
  },
  utc_offset: {
    type: String,
  },
  metro: {
    type: MetroSchema,
  },
  quote: {
    type: QuoteSchema,
  },
  temperature: {
    type: Number,
  },
  climate_description: {
    type: String,
  },
  climate_description_en: {
    type: String,
  },
  transport: {
    type: TransportSchema,
  },
  transport_description: {
    type: String,
  },
  transport_description_en: {
    type: String,
  },
  parking: {
    type: String,
  },
  parking_en: {
    type: String,
  },
  vlogs: {
    type: [String],
  },
  description_wiki_short: {
    type: String,
  },
  description_wiki_short_html: {
    type: String,
  },
  description_wiki: {
    type: String,
  },
});

const City = mongoose.models.City || mongoose.model('City', CitySchema);
export default City;
