/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProductDraft } from './baseProductDraft';

/**
 * Data to represent a new product draft
 */
export type newProductDraft = (baseProductDraft & {
    /**
     * Product number to be used for the final product\
     * This number is user defined, must be unique and has a maximum length (check maxLength field).\
     * Please ensure that it does not contain any of the following character sequences:
     * '/', '%2F', '%2f', '?', '%3F', '%3f',
     * '#', '%23', '&', '%26'. Using any of these will result in the route not being handled correctly.
     */
    productNumber?: string,
});
