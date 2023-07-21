/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data to represent a shop
 */
export type shop = {
    /**
     * Id
     */
    id?: string;
    /**
     * The shopCode used internally to distinguish between clients
     */
    shopCode?: string;
    /**
     * The prefix to the references internally to distinguish between clients.
     */
    internalReferencePrefix?: string;
    /**
     * The email used internally.
     */
    email?: string;
    /**
     * Meta data of the shop.
     */
    meta?: {
        /**
         * Domain of the Shopify shop.
         */
        shopifyShopDomain?: string | null,
        /**
         * Flag to mark a shop used for testing.
         */
        testShop: boolean | null,
        /**
         * Date time to indicate that the test shop will not be reset before this time.
         */
        testShopResetNotBefore?: string | null,
        /**
         * Flag to mark a shop in sandbox mode.
         */
        sandboxMode: boolean | null,
        /**
         * Flag to mark if a test suffix should be added to internal references.
         */
        addTestSuffixToInternalReference: boolean | null,
        /**
         * Flag to mark the shop as part of a Shopify installation that uses multiple shops.
         */
        shopifyMultiShop: boolean | null,
        /**
         * Flag to mark the shop as the default shop for a Shopify installation that uses multiple shops.\
         * The default shop is used for e.g. fetching stock levels.
         */
        shopifyDefaultShop: boolean | null,
        /**
         * The order country code (ISO 3166-1 alpha-2) to identify which shop to use in a Shopify
         * installation that uses multiple shops.\
         * If a Shopify order matches this country code, it will be assigned to this shop.
         */
        shopifyOrderCountryCode?: string | null,
        /**
         * Flag to indicate whether firstname, lastname, and invoiceAddress fields are available for order
         * customers or not.
         */
        invoiceEnabled: boolean | null,
        /**
         * Overwrite currency of shopify orders.
         */
        defaultCurrency?: shop.defaultCurrency | null,
    } | null;
}

export namespace shop {

    /**
     * Overwrite currency of shopify orders.
     */
    export enum defaultCurrency {
        GBP = 'GBP',
        SEK = 'SEK',
        PLN = 'PLN',
    }


}
