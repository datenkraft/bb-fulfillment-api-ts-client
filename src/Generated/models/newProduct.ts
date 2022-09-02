/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProduct } from './baseProduct';

/**
 * Data to create a new product
 */
export type newProduct = (baseProduct & {
    /**
     * Short description of the article.
     */
    articleShortDescription?: string,
});
