import { CurrencyCode } from './currency';
export type TransportOptions = {
  type: TransportType;
  description?: string;
  price_range?: TransportPriceRange;
  price?: TransportPrice[];
};
export type TransportPriceRange = {
  min?: number;
  max?: number;
  currency?: CurrencyCode;
};

export enum TransportType {
  'car',
  'taxi',
  'foot',
  'metro',
  'public',
}
export type TransportPrice = {
  title: string;
  value: number;
  currency: CurrencyCode;
};

export default interface Transport {
  options?: TransportOptions[];
}
