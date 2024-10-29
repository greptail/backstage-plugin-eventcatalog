export interface Config {
  /** Configuration for your plugin */
  eventcatalog: {
    /**
     * Hosted URL of your EventCatalog
     * @visibility frontend
     */
    URL: string;

    /**
     * Map of backstage services to eventcatalog resources
     * @visibility frontend
     */
    services: {
      /**
       * Map of backstage services to eventcatalog resources
       * @visibility frontend
       */
      'backstage-name': string;
      /**
       * Map of backstage services to eventcatalog resources
       * @visibility frontend
       */
      'eventcatalog-id': string;
      /**
       * Map of backstage services to eventcatalog resources
       * @visibility frontend
       */
      'eventcatalog-version'?: string;

      /**
       * The default filter to apply when navigating to the discovery page
       * @visibility frontend
       */
      'eventcatalog-page-discovery-default-filter'?: string;
    }[];
    apis: {
      /**
       * Map of backstage services to eventcatalog resources
       * @visibility frontend
       */
      'backstage-name': string;
      /**
       * Map of backstage services to eventcatalog resources
       * @visibility frontend
       */
      'eventcatalog-id': string;
      /**
       * Map of backstage services to eventcatalog resources
       * @visibility frontend
       */
      'eventcatalog-version'?: string;

      /**
       * The default filter to apply when navigating to the discovery page
       * @visibility frontend
       */
      'eventcatalog-page-discovery-default-filter'?: string;
    }[];
  };
}
