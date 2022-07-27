/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Stock of a product
 */
export type stock = {
    /**
     * Product number
     */
    productNumber?: string;
    /**
     * Amount stocked in the warehouse - without considering the reserved amount for ongoing orders
     */
    stocked?: number;
    /**
     * Amount reserved for ongoing orders
     */
    reserved?: number;
    /**
     * Amount available for orders - with the reserved amount for ongoing orders taken into account
     */
    available?: number;
}
