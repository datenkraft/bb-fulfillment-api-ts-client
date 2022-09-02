/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProduct } from './baseProduct';

/**
 * Data to represent a product
 */
export type product = (baseProduct & {
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
