import * as cheerio from 'cheerio';
import { get } from '../request';
import { environment } from '../../src/environments/environment';

test('Main page title', async () => {
  const response = await get(`${environment.portal_url}/`);
  expect(response.status).toBe(200);

  const $ = cheerio.load(response.data);
  const title = $('title').text();
  expect(title).toContain('OnClass');
});

// TODO редирект на русский языковой домен

// TODO редирект авторизованного на /news
