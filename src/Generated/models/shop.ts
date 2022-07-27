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
     * The shopCode used in DISCO.
     */
    discoShopCode?: string;
    /**
     * The prefix to the references in DISCO.
     */
    discoReferencePrefix?: string;
    /**
     * The email used in DISCO.
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
    } | null;
}
