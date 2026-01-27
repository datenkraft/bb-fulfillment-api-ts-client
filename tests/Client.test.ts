import { ConfigOptions } from "@datenkraft/bb-base-api-ts-client";
import { FulfillmentApiClient } from "../dist";
import { ShopApi } from "../dist/Generated";

describe("Client Test (staging)", () => {
  test("Initialize and use the generated Client", (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID ?? "",
      clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? "",
      oAuthTokenHost: "https://authentication-api.sandbox.steve.niceshops.com",
    };

    FulfillmentApiClient.getApiConfig(
      configOptions,
      "https://fulfillment-api.staging.backbone.datenkraft.info/v2"
    )
      .then((config) => {
      const api = new ShopApi(config);

      api
      .getShopCollection()
      .then((shops) => {
        if (shops instanceof Array) {
          expect(shops).toContain({
            id: "6df08881-fdb0-42e9-9f18-e9d8253058d9",
            discoShopCode: "testShop",
            discoOrderReferencePrefix: "0",
            email: "test@example.com",
            meta: {
              shopifyShopDomain: "test.example.com",
            },
          });
        }
        done();
      })
      .catch((error) => done(error));
    })
    .catch((error) => done(error));
  });
});
