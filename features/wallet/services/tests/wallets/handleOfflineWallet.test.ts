import { handleOfflineWallet } from '../../index';
import { getConnector } from '../../connector';

test('handling connect wallet', () => {
  const connector = getConnector();
  expect(handleOfflineWallet()).toBe(false);
  expect(handleOfflineWallet(connector)).toBe(true);
});
