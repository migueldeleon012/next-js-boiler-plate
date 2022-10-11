import type { NextRouter } from 'next/router';

export const handleLogout = (router: NextRouter) => {
  router?.replace?.('/');
};

export const handleConnectWallet = (connector) => {
  if (!connector) {
    return false;
  }
  if (!connector.connected) {
    connector.createSession();
  }
  return true;
};

export const handleOfflineWallet = (connector) => {
  if (!connector) {
    return false;
  }
  connector.killSession();
  return true;
};
