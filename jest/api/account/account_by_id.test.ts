import { get } from '../../request';
import { environment } from '../../../src/environments/environment';

// Прочитай https://stackoverflow.com/a/65511581

test('get account by id', async () => {
  const user_id = '128ab4d0-8c32-4407-be89-d4011f114833';
  const response = await get(`${environment.account_url}/account/${user_id}`);
  expect(response.status).toBe(200);

  const user = response.data;

  expect(user.first_name).toBe('Kaya');
  // last_name
  // userpic.mdX2
});
