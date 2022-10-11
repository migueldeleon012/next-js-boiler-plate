import type { NextRouter } from 'next/router';
import { UserCredential } from 'firebase/auth';

export const handleLoginClick = ({
  router,
  signInWithPopup,
  auth,
  authProvider,
}: {
  router: NextRouter;
  signInWithPopup: (auth, authProvider) => Promise<UserCredential>;
  auth;
  authProvider;
}) => {
  signInWithPopup(auth, authProvider)
    .then(() => {
      router.push('/dashboard');
    })
    .catch((error) => {
      alert(error);
    });
};
