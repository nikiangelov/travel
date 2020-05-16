import Coordinates from './coordinates';
export interface QualityOfLife {
  total: number;
  safety: number;
  healt_care: number;
  pollution: number;
  climate: number;
}
export default interface CountryInterface {
  id: number;
  name: string;
  code: string;
  capital: string;
  capital_iata_code: string;
  population: number;
  region: string;
  region_en: string;
  subregion: string;
  subregion_en: string;
  coordinates: Coordinates;
  area: number;
  gini: number;
  timezones: string;
  timezone_simple: string;
  timezone_code: string;
  borders: string[];
  currencies: string[];
  flag: string;
  eu: boolean;
  schengen: boolean;
  gpi_rank: number;
  gpi_rank_max: number;
  gpi_score: number;
  gpi_score_min: number;
  gpi_score_max: number;
  price_level: number;
  price_level_max: number;
  price_level_min: number;
  qol: QualityOfLife;
  languages: string[];
  wikipedia_article: string;
  music: string[];
  facts: string[];
}
