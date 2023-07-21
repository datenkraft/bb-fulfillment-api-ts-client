/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * One piece of content in a reconsignment.
 */
export type reconsignmentLine = {
    productNumber?: string;
    /**
     * Number of items which have been put back to stock.
     */
    putBackToStockCount?: number;
    /**
     * Number of items included in the reconsignment.
     */
    count?: number;
    /**
     * Product unit
     */
    unit?: string;
    /**
     * Weight of a single product
     */
    productWeight?: number;
    /**
     * Product weight unit
     */
    productWeightUnit?: string;
}
