import configUtils from '../utils/configuration.utils';
import angularConfiguration from '../config/angular';

describe('getConfig', () => {
  it('should correctly get the configuration', async () => {
    const config = await configUtils.getConfiguration('angular');

    expect(config).toEqual(angularConfiguration);
  });
});