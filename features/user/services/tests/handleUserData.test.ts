import { handleUserData } from '..';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuthInstance } from '../../../firebase/services';

test('handling user data', () => {
  const { auth } = getAuthInstance();

  expect(handleUserData(onAuthStateChanged, auth, 'cb')).toBe(true);
});
