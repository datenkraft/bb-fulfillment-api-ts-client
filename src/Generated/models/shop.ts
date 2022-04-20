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
     * The prefix to the order reference in DISCO.
     */
    discoOrderReferencePrefix?: string;
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
    } | null;
}
