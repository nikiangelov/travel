import { CurrencyCode } from './currency';
import Coordinates from './coordinates';

export type TicketsType = {
  adult?: number;
  reduced?: number;
  currency?: CurrencyCode;
};

export default interface Attraction {
  id: number;
  name: string;
  city_code: string;
  city_url_slug: string;
  country_code: string;
  description_short?: string;
  description?: string;
  wikipedia_article_url?: string;
  coordinates: Coordinates;
  phone?: string | boolean;
  work_time_description?: string | boolean;
  is_free?: boolean;
  tickets: TicketsType;
}
