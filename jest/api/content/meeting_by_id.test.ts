import { get } from '../../request';
import { environment } from '../../../src/environments/environment';

test('get meeting by id', async () => {
  const meeting_id = '4f9de7a1-80e9-4e57-853e-a578e70efaf7';
  const response = await get(`${environment.content_url}/meeting/${meeting_id}`);
  expect(response.status).toBe(200);

  const meeting = response.data;

  // TODO expect(meeting.title).toBe(???);
  expect(meeting.title).toBe('London is a capital of Great Britain');
  // TODO cover.mdX2.url
  expect(meeting.cover.mdX2.url).toBeTruthy();
  // TODO subject.title
  expect(meeting.subject.title).toContain('Geography');
});
