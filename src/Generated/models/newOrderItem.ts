/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newOrderItemPrice } from './newOrderItemPrice';
import type { orderItem } from './orderItem';

/**
 * Note: Only one Order Item may be sent per product.\
 * This means that if a product appears in the shopping cart more than once, it must be aggregated to a single
 * OrderItem with a correspondingly increased count.
 */
export type newOrderItem = (orderItem & {
    price?: newOrderItemPrice,
});
