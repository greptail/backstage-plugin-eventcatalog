import { Config } from '@backstage/config';
import { ConfigApi } from '@backstage/core-plugin-api';

export type ResourceMap = {
  'backstage-name': string;
  'eventcatalog-id': string;
  'eventcatalog-version'?: string;
  'eventcatalog-page-discovery-default-filter'?: string;
};

export interface EventCatalogConfig {
  URL: string;
  services?: ResourceMap[];
  apis?: ResourceMap[];
}

const toCatalogMap = (config: Config) => {
  return {
    'backstage-name': config.getString('backstage-name'),
    'eventcatalog-id': config.getString('eventcatalog-id'),
    'eventcatalog-version': config.getOptionalString('eventcatalog-version') || 'latest',
    'eventcatalog-page-discovery-default-filter': config.getOptionalString('eventcatalog-page-discovery-default-filter') ?? '',
  };
};

export function getConfig(config: ConfigApi): EventCatalogConfig {
  const pluginConfig = config.getConfig('eventcatalog');
  const services = pluginConfig.getOptionalConfigArray('services') || [];
  const apis = pluginConfig.getOptionalConfigArray('apis') || [];

  return {
    URL: pluginConfig.getString('URL'),
    services: services.map(toCatalogMap),
    apis: apis.map(toCatalogMap),
  };
}
