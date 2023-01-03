/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProduct } from './baseProduct';

/**
 * Data to create a new product
 */
export type newProduct = (baseProduct & {
    /**
     * Status of the product regarding sales.
     *
     * Available values:
     * - enabled: Product is on sale (default)
     * - enabled_external_only: Product is only available in external stores
     */
    productStatus: newProduct.productStatus | null,
    /**
     * Short description of the article.
     */
    articleShortDescription?: string,
});

export namespace newProduct {

    /**
     * Status of the product regarding sales.
     *
     * Available values:
     * - enabled: Product is on sale (default)
     * - enabled_external_only: Product is only available in external stores
     */
    export enum productStatus {
        ENABLED = 'enabled',
        ENABLED_EXTERNAL_ONLY = 'enabled_external_only',
    }


}
