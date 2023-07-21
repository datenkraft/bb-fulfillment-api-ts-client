/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Fields to update a shop
 */
export type updateShop = {
    /**
     * Meta data of the shop.
     */
    meta?: {
        /**
         * Domain of the Shopify shop.
         */
        shopifyShopDomain?: string | null,
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
         * Overwrite currency of shopify orders.
         */
        defaultCurrency?: updateShop.defaultCurrency | null,
    } | null;
}

export namespace updateShop {

    /**
     * Overwrite currency of shopify orders.
     */
    export enum defaultCurrency {
        GBP = 'GBP',
        SEK = 'SEK',
        PLN = 'PLN',
    }


}
