import constants from '../constants';

let currentLanguage = 'bg';

export const setLinkHandlerLanguage = (lang: string) => {
  currentLanguage = lang;
};
export const getLinkHandlerLanguage = (): string => {
  return currentLanguage;
};
export default function(url: string, lang: string): string {
  if (lang && lang !== constants.defaultLanguage) {
    return `${url}?lang=${lang}`;
  }
  return url;
}
