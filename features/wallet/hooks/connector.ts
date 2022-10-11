import WalletConnect from '@walletconnect/client';
import { useState } from 'react';
import { onConnect, onDisconnect } from '../services/connector';
import { getConnector } from '../services/connector';

export const useConnect = () => {
  const connector: WalletConnect = getConnector();
  const [wallet, setWallet] = useState<{ [key: string]: any } | null>(null);

  const onSuccessParams = {
    connector,
    setWallet,
  };
  const onDisconnectParams = {
    connector,
    setWallet,
  };

  const checkConnection = () => {
    connector.connected && wallet === null ? setWallet(connector) : null;
  };

  return {
    onConnect: () => {
      onConnect(onSuccessParams);
    },
    onDisconnect: () => {
      onDisconnect(onDisconnectParams);
    },
    checkConnection: () => checkConnection(),
    wallet: wallet,
  };
};
