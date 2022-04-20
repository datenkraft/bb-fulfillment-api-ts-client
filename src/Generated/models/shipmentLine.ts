/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * One piece of content in a shipment
 */
export type shipmentLine = {
    /**
     * product number
     */
    productNumber?: string;
    /**
     * Number of items contained in the delivery
     */
    count?: number;
    /**
     * product unit
     */
    unit?: string | null;
    /**
     * serial numbers
     */
    serialNumbers?: Array<string>;
}
