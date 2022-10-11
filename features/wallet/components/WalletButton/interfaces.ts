import { CustomButtonProps } from '../../../../components/Button/interface';

export type WalletButtonProps = CustomButtonProps & {
  type?: 'connectWallet' | 'offlineWallet' | 'logout';
};
