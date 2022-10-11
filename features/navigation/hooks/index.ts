import { useRouter } from 'next/router';
import { navigateTo } from '../services';

export const useNavigateOnNavbar = (address) => {
  const router = useRouter();

  return {
    handleClick: () => navigateTo(router, address),
  };
};
