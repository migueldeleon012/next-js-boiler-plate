import { useRouter } from 'next/router';
import {
  handleLogout,
  handleConnectWallet,
  handleOfflineWallet,
} from '../services';
import { getConnector } from '../services/connector';

//CODE

export const useWalletButton = (
  type: 'connectWallet' | 'offlineWallet' | 'logout'
) => {
  const router = useRouter();
  const connector = getConnector();

  return {
    handleClick: () => {
      switch (type) {
        case 'connectWallet':
          handleConnectWallet(connector);
          break;
        case 'offlineWallet':
          console.log('disconnect');
          handleOfflineWallet(connector);
          break;
        case 'logout':
          handleLogout(router);
        default:
          break;
      }
    },
  };
};
