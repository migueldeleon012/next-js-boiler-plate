import React, { useState } from 'react';
import { getConnector } from '../../services/connector';
import { useConnect } from '../../hooks/connector';

const WalletInfo = () => {
  const { onConnect, onDisconnect, checkConnection, wallet } = useConnect();
  onConnect();
  onDisconnect();
  checkConnection();

  return (
    <>
      <h1>Wallet Info:</h1>
      <p>{wallet?.accounts?.[0]}</p>
    </>
  );
};

export default WalletInfo;
