import mongoose from 'mongoose';
import { PopulationSchema } from './GlobalTypes';
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sub_name: {
    type: String,
  },
  population: {
    type: PopulationSchema,
  },
  utc_offset: {
    type: String,
  },
  url_slug: {
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
  iata_code: {
    type: String,
  },
  country_code: {
    type: String,
  },
  description: {
    type: String,
  },
  temperature: {
    type: Number,
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
  climate_description: {
    type: String,
  },
});

const City = mongoose.models.City || mongoose.model('City', CitySchema);
export default City;
