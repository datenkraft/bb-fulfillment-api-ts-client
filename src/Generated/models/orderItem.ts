/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderItemPrice } from './orderItemPrice';

export type orderItem = {
    /**
     * Valid product number
     */
    productNumber: string;
    /**
     * Item Title (optional)
     */
    title?: string | null;
    /**
     * Positive number of items to order
     */
    count: number;
    /**
     * Number of canceled items
     */
    canceledCount?: number;
    /**
     * Number of delivered items
     */
    deliveredCount?: number;
    /**
     * Number of returned items
     */
    returnedCount?: number;
    /**
     * Product number of the customer
     */
    externalProductNumber?: string | null;
    price?: orderItemPrice;
    /**
     * Additional options (optional, TBD)
     */
    options?: any;
}
