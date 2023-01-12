/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProduct } from './baseProduct';

/**
 * Data to represent a product
 */
export type product = (baseProduct & {
    /**
     * Status of the product regarding sales.
     *
     * Available values:
     * - enabled: Product is on sale
     * - enabled_external_only: Product is only available in external stores
     * - deleted: Product is deleted
     * - discontinued: Product is disontinued
     * - expired: Product is expired
     * - incorrect: Product was incorrectly created
     * - internal: Product is available for internal sales only
     * - preparation: Product is in preparation for sale
     */
    productStatus: product.productStatus,
    /**
     * Short description of the article. \
     * Note: This can be null if the product was not created via the API.
     */
    articleShortDescription?: string | null,
    productNumber?: string,
    /**
     * The shop to which the product belongs
     */
    shopCode?: string,
});

export namespace product {

    /**
     * Status of the product regarding sales.
     *
     * Available values:
     * - enabled: Product is on sale
     * - enabled_external_only: Product is only available in external stores
     * - deleted: Product is deleted
     * - discontinued: Product is disontinued
     * - expired: Product is expired
     * - incorrect: Product was incorrectly created
     * - internal: Product is available for internal sales only
     * - preparation: Product is in preparation for sale
     */
    export enum productStatus {
        ENABLED = 'enabled',
        ENABLED_EXTERNAL_ONLY = 'enabled_external_only',
        DELETED = 'deleted',
        DISCONTINUED = 'discontinued',
        EXPIRED = 'expired',
        INCORRECT = 'incorrect',
        INTERNAL = 'internal',
        PREPARATION = 'preparation',
    }


}
