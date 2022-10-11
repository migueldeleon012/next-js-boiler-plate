import WalletConnect from '@walletconnect/client';
import QRCodeModal from 'algorand-walletconnect-qrcode-modal';

const connector = new WalletConnect({
  bridge: 'https://bridge.walletconnect.org',
  qrcodeModal: QRCodeModal,
});

export const getConnector = () => connector;

export const onConnect = ({
  connector,
  setWallet,
}: {
  connector: WalletConnect;
  setWallet;
}) => {
  //logic starts here
  connector.on('connect', (error, payload) => {
    if (error) {
      console.log(error);
    }
    setWallet(payload.params[0]);
  });
};

export const onDisconnect = ({
  connector,
  setWallet,
}: {
  connector: WalletConnect;
  setWallet;
}) => {
  //logic starts here
  if (!connector || !setWallet) {
    return false;
  }

  connector.on('disconnect', (error, payload) => {
    if (error) {
      console.log(error);
    }
    setWallet({});
  });
};
