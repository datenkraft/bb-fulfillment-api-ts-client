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
    } | null;
}
