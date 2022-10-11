import { onConnect } from '../../connector';

test('on connection', () => {
  const connector = getConnector();
  const callback = () => {};
  expect(onConnect()).ToBe(false);
  expect(onConnect({ connector, setWallet: callback })).ToBe(true);
});
