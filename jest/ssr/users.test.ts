import * as cheerio from 'cheerio';
import { get } from '../request';
import { environment } from '../../src/environments/environment';

test('Kaya page works', async () => {
  const response = await get(`${environment.portal_url}/u/kaya`);
  expect(response.status).toBe(200);

  const $ = cheerio.load(response.data);
  const actual = $('title').text();
  expect(actual).toContain('with kaya edwards');
  expect(actual).toContain('| OnClass');
});
