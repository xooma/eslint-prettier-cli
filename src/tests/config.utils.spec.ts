import angularConfig from '../config/angular.js';
import nestConfig from '../config/nest.js';
import { getConfiguration, getMultipleConfigurations, mergeContentConfigurations } from '../utils/configuration.utils.js';
import { angularConfigMock, mergedResultMock, nestConfigMock } from './config.data.js';

describe('configUtils', () => {
  it('should correctly get the configuration', async () => {
    const config = await getConfiguration('angular');

    expect(config).toEqual(angularConfig);
  });

  it('should correctly get multiple configurations', async () => {
    const configs = await getMultipleConfigurations(['angular', 'nest']);

    expect(configs).toEqual([angularConfig, nestConfig])
  })

  it('should merge multiple configurations', async () => {
    const result = mergeContentConfigurations([angularConfigMock, nestConfigMock]);

    expect(result).toEqual(mergedResultMock);
  })
});