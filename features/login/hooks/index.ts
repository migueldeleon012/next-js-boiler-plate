import { getAuthInstance } from '../../firebase/services';
import { handleLoginClick } from '../services';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';

export const useGoogleAuth = () => {
  const { auth, authProvider } = getAuthInstance();
  const router = useRouter();
  return {
    handleClick: () =>
      handleLoginClick({ router, signInWithPopup, auth, authProvider }),
  };
};
