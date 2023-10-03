/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * One piece of content in a shipment
 */
export type shipmentLine = {
    /**
     * Product number
     */
    productNumber?: string;
    /**
     * Number of items contained in the delivery
     */
    count?: number;
    /**
     * Product unit
     */
    unit?: string | null;
    /**
     * Serial numbers
     */
    serialNumbers?: Array<string>;
    /**
     * Allows the traceability of the products in the deliveries.
     */
    traceCodes?: Array<string>;
}
