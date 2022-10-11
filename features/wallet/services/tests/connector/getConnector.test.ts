import { getConnector } from '../../connector';

test('getting connector', () => {
  const connector = getConnector();
  expect(getConnector()).toEqual(connector);
});
