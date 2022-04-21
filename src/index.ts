import { Config, ConfigOptions, Auth } from '@datenkraft/bb-base-api-ts-client';
import { OpenAPI } from './Generated';
import * as GeneratedClient from './Generated/index';

export namespace FulfillmentApiClient {
  export async function init(
    configOptions: ConfigOptions,
    endpointUrl: string | null = null
  ) {
    OpenAPI.BASE =
      endpointUrl ?? process.env.X_DATENKRAFT_FULFILLMENT_API_URL ?? '';
    OpenAPI.TOKEN = await new Auth(new Config(configOptions)).getAccessToken();
  }

  // eslint-disable-next-line no-unused-vars
  export import Generated = GeneratedClient;
}
