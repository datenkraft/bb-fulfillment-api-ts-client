/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrderCustomer } from './baseOrderCustomer';
import type { orderItem } from './orderItem';
import type { orderPayment } from './orderPayment';
import type { orderShipping } from './orderShipping';

/**
 * Data to represent an order
 */
export type baseOrder = {
    /**
     * The shopCode used in DISCO.
     */
    shopCode?: string | null;
    customer: baseOrderCustomer;
    orderItems: Array<orderItem>;
    payment: orderPayment;
    shipping?: (null | orderShipping) | null;
    /**
     * Additional options (optional, TBD)
     */
    options?: any;
}
