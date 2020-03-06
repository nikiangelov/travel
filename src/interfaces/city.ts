import Coordinates from './coordinates';
import Metro from './metro';
import Quote from './quote';
import Transport from './transport';

export type Population = {
  year?: number;
  total?: number;
  density?: number;
};
export default interface City {
  id: number;
  name: string;
  sub_name: string;
  url_slug: string;
  iata_code: string;
  country_code: string;
  backdrop_image?: string;
  featured_image_vertical?: string;
  featured_image_thumb?: string;
  wiki_article_url?: string;
  population?: Population;
  coordinates?: Coordinates;
  website?: string;
  time_zone?: string;
  utc_offset?: string;
  temperature?: number;
  metro?: Metro;
  quote?: Quote;
  description?: string;
  history?: string;
  history_en?: string;
  climate_description?: string;
  climate_description_en?: string;
  transport?: Transport;
  transport_description?: string;
  transport_description_en?: string;
  parking?: string;
  parking_en?: string;
  vlogs?: string[];
  description_wiki_short?: string;
  description_wiki_short_html?: string;
  description_wiki?: string;
}
