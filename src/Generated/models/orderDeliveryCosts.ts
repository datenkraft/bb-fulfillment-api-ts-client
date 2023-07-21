/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderPrice } from './orderPrice';

/**
 * The delivery costs of the order, which will be charged to the customer.\
 * Note: This field is required if customs clearance is necessary for the delivery address of the order.
 */
export type orderDeliveryCosts = (orderPrice & {
    title?: string | null,
});
