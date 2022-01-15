import axios, { AxiosRequestConfig } from 'axios';

// Внимание!
// Страницы портала onclass.tech возвращают 403 ошибку для UserAgent "Googlebot", "Yandex" и "Bingbot" [https://app.clickup.com/t/rgaepr]
const userAgents = {
  /** https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers?hl=ru */
  GoogleBot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',

  YandexBot: 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
  YandexMobileScreenShotBot: 'Mozilla/5.0 (compatible; YandexMobileScreenShotBot/1.0; +http://yandex.com/bots)',
  YandexMobileBot: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4 (compatible; YandexMobileBot/3.0; +http://yandex.com/bots)',

  /** https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0 */
  BingBot: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  SkypePreview: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b',
}

const defaultHeaders = {
  'user-agent': userAgents.SkypePreview,

  // 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'accept-language': 'en',

  // ?Cookie: ...
  // ?X-Authorization: 'Bearer ...',
};

export async function get(url: string , config?: AxiosRequestConfig) {
  const _headers = {
    ...defaultHeaders,
    ...(config || {}).headers,
  }
  const _config: AxiosRequestConfig = {
    ...config,
    headers: _headers,
  };
  return axios.get(url, _config);
}
