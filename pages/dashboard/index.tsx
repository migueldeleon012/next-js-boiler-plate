import React from 'react';
import WalletButton from '../../features/wallet/components/WalletButton';
import WalletInfo from '../../features/wallet/components/WalletInfo';
import UserInfo from '../../features/user/components/UserInfo';
import Navbar from '../../components/Navbar';
import MainContainer from '../../components/MainContainer';
import { Spacer } from './styles';
import {
  sampleTopBarProfileData,
  sampleSideBarData,
} from '../../features/navigation/components/sampleData';

const Dashboard = () => {
  return (
    <>
      <Navbar
        sideBarData={sampleSideBarData}
        topBarData={sampleTopBarProfileData}
      />
      <Spacer />
      <MainContainer>
        <h1>Dashboard</h1>
        <WalletButton
          type="logout"
          variant="contained"
          title="logout"
          color="error"
        />
        <WalletButton
          type="connectWallet"
          variant="contained"
          title="connect your wallet"
          color="primary"
        />
        <WalletButton
          type="offlineWallet"
          variant="contained"
          title="disconnect your wallet"
          color="primary"
        />
        <UserInfo />
        <WalletInfo />
      </MainContainer>
    </>
  );
};
export default Dashboard;
