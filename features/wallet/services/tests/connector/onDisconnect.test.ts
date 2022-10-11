import { onDisconnect } from '../../connector';

test('on connection', () => {
  const connector = getConnector();
  expect(onDisconnect()).ToBe(false);
  expect(onDisconnect(connector)).ToBe(false);
  expect(onDisconnect(connector, 'setWallet')).ToBe(true);
});
