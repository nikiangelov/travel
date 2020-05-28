import { useContext } from 'react';
import { I18nContext } from '../lib/i18n';

export default function useI18n() {
  return useContext(I18nContext);
}
