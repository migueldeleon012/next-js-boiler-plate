import React from 'react';
import CustomButton from '../../../../components/Button';
import { WalletButtonProps } from './interfaces';
import { useWalletButton } from '../../hooks';

const WalletButton = ({ type, ...props }: WalletButtonProps) => {
  const { handleClick } = useWalletButton(type);

  return <CustomButton {...props} onClick={handleClick} />;
};

export default WalletButton;
