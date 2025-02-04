import * as cheerio from 'cheerio';
import { get } from '../request';
import { environment } from '../../src/environments/environment';
import { URL } from 'url';
import { url } from 'inspector';

test('Meeting page has meta', async () => {
  const response = await get(`${environment.portal_url}/study/geography/group-lessons/London-is-a-capital-of-Great-Britain-r0fa4z0f`);
  expect(response.status).toBe(200);

  const $ = cheerio.load(response.data);

  // <title>London is a capital of Great Britain, Geography, December 2nd, 2019 10:00 — 11:00, Beginner, Kaya Edwards — Study | OnClass</title>
  const title = $('title').text();
  
  // TODO проверить что там текст "London is a capital of Great Britain"
  expect(title).toContain('London is a capital of Great Britain');

  // <meta name="description" content="Lorem ipsum dolor sit amet<...>">
  const description = $('meta[name="description"]').attr('content').toString().trim();
  // TODO Проверить что там есть текст Lorem ipsum dolor sit amet
  expect(description).toContain('Lorem ipsum dolor sit amet');

  // TODO const h1 = $('app-meeting-card h1').toString().trim();
  const h1 = $('app-meeting-card h1').toString().trim();
  // TODO проверить что там текст "London is a capital of Great Britain"
  expect(h1).toContain("London is a capital of Great Britain");

  // TODO const img = $('app-meeting-card img.cover-img').attr(???).toString().trim();
  const img = $('app-meeting-card img.cover-img').attr('src').toString().trim();
  // TODO проверить что там URL картинки
  expect(img).not.toBeNull();
  expect(img.length).toBeGreaterThan(0);
  expect(img).toContain('.jpg'); //если предполагаеться, что изображение в формате "jpg" 
  
});