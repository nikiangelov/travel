import mongoose from 'mongoose';
import { CoordinatesSchema, QualityOfLifeSchema } from './GlobalTypes';
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  capital: {
    type: String,
    required: true,
  },
  capital_iata_code: {
    type: String,
  },
  population: {
    type: Number,
  },
  region: {
    type: String,
  },
  region_en: {
    type: String,
  },
  subregion: {
    type: String,
  },
  subregion_en: {
    type: String,
  },
  coordinates: {
    type: CoordinatesSchema,
  },
  area: {
    type: Number,
  },
  gini: {
    type: Number,
  },
  timezone: {
    type: String,
  },
  timezone_simple: {
    type: String,
  },
  timezone_code: {
    type: String,
  },
  borders: {
    type: [String],
  },
  currencies: {
    type: [String],
  },
  flag: {
    type: String,
  },
  eu: {
    type: Boolean,
  },
  schengen: {
    type: Boolean,
  },
  gpi_rank: {
    type: Number,
  },
  gpi_rank_max: {
    type: Number,
  },
  gpi_score: {
    type: Number,
  },
  gpi_score_min: {
    type: Number,
  },
  gpi_score_max: {
    type: Number,
  },
  price_level: {
    type: Number,
  },
  price_level_max: {
    type: Number,
  },
  price_level_min: {
    type: Number,
  },
  qol: {
    type: QualityOfLifeSchema,
  },
  languages: {
    type: [String],
  },
  wikipedia_article: {
    type: String,
  },
  music: {
    type: [String],
  },
  facts: {
    type: [String],
  },
});

const Country =
  mongoose.models.Country || mongoose.model('Country', CountrySchema);
export default Country;
