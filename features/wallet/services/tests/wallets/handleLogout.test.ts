import { handleLogout } from '../../';

test('handling logout', () => {
  expect(handleLogout('router')).toBe(true);
});
