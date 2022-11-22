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
 * Data to represent an order
 */
export type order = (baseOrder & {
    /**
     * The order number. Note: This can be null if the order as not created via the API.
     */
    orderNumber?: string | null,
    /**
     * Note: canceled orderItems are NOT included.
     */
    orderItems?: Array<orderItem>,
    customer?: orderCustomer,
    /**
     * The current status of the order.
     * - new: The order was created but not every required information was given. The order can not be processed without manual intervention.
     * - processing: The order is being processed. For split deliveries, some of the shipments might have already been transferred to the delivery agent.
     * - delivered: The orders shipments have all been transferred to the delivery agent.
     * - deleted: The order has been cancelled.
     * - locked: The order is locked. The order can not be processed without manual intervention.
     * - examination: The order has been manually locked.  The order can not be processed without manual intervention.
     *
     */
    status?: order.status,
    /**
     * The create date for the order. Default is the current date. Format in ISO 8601
     */
    orderDate?: string,
    delivery?: Array<orderDelivery> | null,
    payment?: orderPayment,
    shipping?: orderShipping,
});

export namespace order {

    /**
     * The current status of the order.
     * - new: The order was created but not every required information was given. The order can not be processed without manual intervention.
     * - processing: The order is being processed. For split deliveries, some of the shipments might have already been transferred to the delivery agent.
     * - delivered: The orders shipments have all been transferred to the delivery agent.
     * - deleted: The order has been cancelled.
     * - locked: The order is locked. The order can not be processed without manual intervention.
     * - examination: The order has been manually locked.  The order can not be processed without manual intervention.
     *
     */
    export enum status {
        NEW = 'new',
        PROCESSING = 'processing',
        DELIVERED = 'delivered',
        DELETED = 'deleted',
        LOCKED = 'locked',
        EXAMINATION = 'examination',
    }


}
