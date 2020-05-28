import { createContext, useState, useRef, useEffect } from 'react';
import constants from '../constants';
import rosetta from 'rosetta';
// import rosetta from 'rosetta/debug';

const i18n = rosetta();

export const defaultLanguage = constants.defaultLanguage;
export const languages = constants.availableLanguages;
export const contentLanguageMap = constants.contentLanguageMap;

type I18nProviderProps = {
  children: any;
  locale: string | undefined;
  lngDict: any;
};
export type I18nContextType = {
  t(key: any): string;
  activeLocale: string;
  locale(l: string, dict?: any): void;
};
export const I18nContext = createContext<I18nContextType>({
  t: (_: any[]): any => {},
  activeLocale: constants.defaultLanguage,
  locale: (_: string) => {},
});

// default language
i18n.locale(defaultLanguage);

export default function I18n({ children, locale, lngDict }: I18nProviderProps) {
  const [activeDict, setActiveDict] = useState(() => lngDict);
  const activeLocaleRef = useRef(locale || defaultLanguage);
  const [, setTick] = useState(0);
  const firstRender = useRef(true);

  // for initial SSR render
  if (locale && firstRender.current === true) {
    firstRender.current = false;
    i18n.locale(locale);
    i18n.set(locale, activeDict);
  }

  useEffect(() => {
    if (locale) {
      i18n.locale(locale);
      i18n.set(locale, activeDict);
      activeLocaleRef.current = locale;
      // force rerender
      setTick(tick => tick + 1);
    }
  }, [locale, activeDict]);

  const i18nWrapper = {
    activeLocale: activeLocaleRef.current,
    t: (args: any): any => i18n.t(args),
    locale: async (l: string, dict: any) => {
      i18n.locale(l);
      activeLocaleRef.current = l;
      if (!dict) {
        // try to load it
        const { default: lngDict = {} } = await import(`../locales/${l}.json`);
        if (lngDict) {
          dict = lngDict;
        }
      }
      if (dict) {
        i18n.set(l, dict);
        setActiveDict(dict);
      } else {
        setTick(tick => tick + 1);
      }
    },
  };

  return (
    <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
  );
}
