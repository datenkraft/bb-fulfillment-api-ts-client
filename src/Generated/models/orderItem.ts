/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderItemPrice } from './orderItemPrice';

export type orderItem = {
    productNumber: string;
    /**
     * Item title (optional)
     */
    title?: string | null;
    /**
     * Positive number of items to order
     */
    count: number;
    /**
     * Product number of the customer
     */
    externalProductNumber?: string | null;
    price?: orderItemPrice | null;
    /**
     * Additional options (optional, TBD)
     */
    options?: any;
}
