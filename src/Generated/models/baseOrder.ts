/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrderCustomer } from './baseOrderCustomer';
import type { baseOrderOptions } from './baseOrderOptions';
import type { orderDeliveryCosts } from './orderDeliveryCosts';
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
    /**
     * The external order ID e.g. from third party apps. This field does not have to be unique.
     * It can be used to link and refind multiple orders, for example, if there are multiple fulfilment orders possible for a
     * single customer order.
     */
    externalOrderId?: string | null;
    /**
     * A not unique reference for the order which can be used for identifiying a specific order or for
     * mapping to a third party app.
     */
    externalOrderReference?: string | null;
    /**
     * Notes for the delivery slip.
     */
    deliverySlipNotes?: string | null;
    /**
     * Order notes regarding the fulfillment
     */
    orderNotes?: string | null;
    /**
     * The amazon order Id
     */
    amazonOrderId?: string | null;
    deliveryCosts?: Array<orderDeliveryCosts> | null;
    options?: baseOrderOptions;
}
