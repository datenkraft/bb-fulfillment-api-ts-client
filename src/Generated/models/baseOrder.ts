/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrderCustomer } from './baseOrderCustomer';
import type { baseOrderOptions } from './baseOrderOptions';
import type { newOrderItem } from './newOrderItem';
import type { orderDeliveryCosts } from './orderDeliveryCosts';

/**
 * Data to represent an order
 */
export type baseOrder = {
    /**
     * The shopCode used internally to distinguish between clients.
     */
    shopCode?: string | null;
    customer: baseOrderCustomer;
    orderItems: Array<newOrderItem>;
    /**
     * A not unique reference for the order which can be used for identifying a specific order or for
     * mapping to a third party app.
     */
    externalOrderId?: string | null;
    /**
     * Notes to be printed on the delivery slip.
     */
    deliverySlipNotes?: string | null;
    /**
     * External reference for the order
     */
    externalOrderReference?: string | null;
    /**
     * Notes for the steve team regarding the fulfillment.
     */
    orderNotes?: string | null;
    /**
     * The amazon order id.
     */
    amazonOrderId?: string | null;
    deliveryCosts?: Array<orderDeliveryCosts> | null;
    options?: baseOrderOptions;
}
