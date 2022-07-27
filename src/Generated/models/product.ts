/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newProduct } from './newProduct';

/**
 * Data to represent a product
 */
export type product = (newProduct & {
    productNumber?: string,
    /**
     * The shop to which the product belongs
     */
    shopCode?: string,
});
