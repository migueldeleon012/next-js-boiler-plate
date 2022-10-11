import { handleLoginClick } from '..';
import { getAuthInstance } from '../../../firebase/services';
import { signInWithPopup } from 'firebase/auth';

test('on connection', () => {
  const { auth, authProvider } = getAuthInstance();
  expect(handleLoginClick()).ToBe(false);
  expect(handleLoginClick(router)).ToBe(false);
  expect(handleLoginClick(router, signInWithPopup)).ToBe(false);
  expect(handleLoginClick(router, signInWithPopup, auth)).ToBe(false);
  expect(handleLoginClick(router, signInWithPopup, auth, authProvider)).ToBe(
    true
  );
});
