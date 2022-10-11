import { handleConnectWallet } from '../..';
import { getConnector } from '../../connector';

test('handling connect wallet', () => {
  const connector = getConnector();
  expect(handleConnectWallet()).toBe(false);
  expect(handleConnectWallet(connector)).toBe(true);
});
