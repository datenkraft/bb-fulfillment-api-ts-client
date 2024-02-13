/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrder } from './baseOrder';
import type { orderCustomer } from './orderCustomer';
import type { orderDelivery } from './orderDelivery';
import type { orderItem } from './orderItem';
import type { orderPayment } from './orderPayment';
import type { orderShipping } from './orderShipping';

/**
 * Data to represent an order.
 */
export type order = (baseOrder & {
    /**
     * The order number.\
     * Note: If this number is prefixed with 'NICE', it means that the order was created
     * manually by niceshops (see 'source').
     */
    orderNumber?: any,
    /**
     * Note: canceled orderItems are NOT included.
     */
    orderItems?: Array<orderItem>,
    customer?: orderCustomer,
    /**
     * The current status of the order.
     * - new: The order was created but not every required information was given.
     * The order can not be processed without manual intervention.
     * - processing: The order is being processed. For split deliveries, some of the shipments might have
     * already been transferred to the delivery agent.
     * - delivered: The orders shipments have all been transferred to the delivery agent (Note that the
     * update to this status might be delayed and not yet reflect the status of the linked deliveries).
     * - deleted: The order has been marked as deleted.
     * - canceled: The order has been canceled.
     * - locked: The order is locked. The order can not be processed without manual intervention.
     * - examination: The order has been manually locked. The order can not be processed without manual
     * intervention.
     * - redacted: The order has been redacted for GDPR reasons.
     */
    status?: order.status,
    /**
     * The create date for the order. Format in ISO 8601
     */
    orderDate?: string,
    /**
     * Note that only deliveries with status 'delivered' are shown in this list.
     */
    delivery?: Array<orderDelivery> | null,
    payment?: orderPayment,
    shipping?: orderShipping,
    /**
     * The source of the order.
     * - shopify: This order was created via the steve by niceshops Shopify application
     * - nice: This order was created manually by niceshops
     * - api: This order was created via the Fulfillment API
     */
    source?: order.source,
    /**
     * If available, a hyperlink to the application where this order was created is provided
     */
    sourceLink?: string | null,
    /**
     * Indicates whether the order can be canceled or not
     */
    cancelable?: boolean,
});

export namespace order {

    /**
     * The current status of the order.
     * - new: The order was created but not every required information was given.
     * The order can not be processed without manual intervention.
     * - processing: The order is being processed. For split deliveries, some of the shipments might have
     * already been transferred to the delivery agent.
     * - delivered: The orders shipments have all been transferred to the delivery agent (Note that the
     * update to this status might be delayed and not yet reflect the status of the linked deliveries).
     * - deleted: The order has been marked as deleted.
     * - canceled: The order has been canceled.
     * - locked: The order is locked. The order can not be processed without manual intervention.
     * - examination: The order has been manually locked. The order can not be processed without manual
     * intervention.
     * - redacted: The order has been redacted for GDPR reasons.
     */
    export enum status {
        NEW = 'new',
        PROCESSING = 'processing',
        DELIVERED = 'delivered',
        DELETED = 'deleted',
        CANCELED = 'canceled',
        LOCKED = 'locked',
        EXAMINATION = 'examination',
        REDACTED = 'redacted',
    }

    /**
     * The source of the order.
     * - shopify: This order was created via the steve by niceshops Shopify application
     * - nice: This order was created manually by niceshops
     * - api: This order was created via the Fulfillment API
     */
    export enum source {
        SHOPIFY = 'shopify',
        NICE = 'nice',
        API = 'api',
    }


}
