/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrder } from './baseOrder';
import type { newOrderCustomer } from './newOrderCustomer';
import type { newOrderItem } from './newOrderItem';

/**
 * Data to create a new order
 */
export type newOrder = (baseOrder & {
    customer?: newOrderCustomer,
    orderItems?: Array<newOrderItem>,
});
