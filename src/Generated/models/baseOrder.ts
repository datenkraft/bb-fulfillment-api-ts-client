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
     * The shopCode used in DISCO.
     */
    shopCode?: string | null;
    customer: baseOrderCustomer;
    orderItems: Array<orderItem>;
    options?: baseOrderOptions;
}
