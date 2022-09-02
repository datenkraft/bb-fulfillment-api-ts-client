/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrderCustomer } from './baseOrderCustomer';
import type { baseOrderOptions } from './baseOrderOptions';
import type { orderItem } from './orderItem';

/**
 * Data to represent an order
 */
export type baseOrder = {
    /**
     * The shopCode used internally to distinguish between clients.
     */
    shopCode?: string | null;
    customer: baseOrderCustomer;
    orderItems: Array<orderItem>;
    options?: baseOrderOptions;
}
