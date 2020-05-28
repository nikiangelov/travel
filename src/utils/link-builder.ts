import constants from '../constants';
import urlParse from 'url-parse';

const build = (url: string, lang: string): string => {
  const parsedUrl = urlParse(url, true);
  parsedUrl.set('hostname', '');
  parsedUrl.set('protocol', '');
  parsedUrl.set('port', '');
  parsedUrl.set('slashes', '');
  parsedUrl.set('query', { ...parsedUrl.query, lang });
  return parsedUrl.toString();
};

export default function(
  url: string,
  lang: string | undefined = undefined,
): string {
  if (lang && lang !== constants.defaultLanguage) {
    return build(url, lang);
  }
  return url;
}
