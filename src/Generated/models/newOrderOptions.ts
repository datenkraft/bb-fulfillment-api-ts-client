/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrderOptions } from './baseOrderOptions';

/**
 * Additional optional options for a new order.
 */
export type newOrderOptions = (baseOrderOptions & {
    /**
     * By setting this option, the order will be processed into the defined state.\
     * This option is NOT available in the production systems.\
     * The autoprocessing of the state happens after the order has been sucessfully created.
     * In case of any errors during the autoprocessing of the state, error messages are shown but the order will still have
     * been created and will not be rolled back.\
     * Available states:
     * - order_completed_single_delivery: The order is completely delivered within one delivery.\
     * Note that it might not be possible to create a single delivery for the whole order, for example because of weight
     * restrictions. In those cases multiple deliveries will be created.
     * - order_completed_multiple_deliveries: The order is completely delivered and includes several deliveries.
     * - order_partially_delivered: The order is in progress and one of several deliveries is delivered.
     * - order_canceled: The order is canceled.
     * - order_locked: The order is locked.
     */
    autoProcessState?: newOrderOptions.autoProcessState,
}) | null;

export namespace newOrderOptions {

    /**
     * By setting this option, the order will be processed into the defined state.\
     * This option is NOT available in the production systems.\
     * The autoprocessing of the state happens after the order has been sucessfully created.
     * In case of any errors during the autoprocessing of the state, error messages are shown but the order will still have
     * been created and will not be rolled back.\
     * Available states:
     * - order_completed_single_delivery: The order is completely delivered within one delivery.\
     * Note that it might not be possible to create a single delivery for the whole order, for example because of weight
     * restrictions. In those cases multiple deliveries will be created.
     * - order_completed_multiple_deliveries: The order is completely delivered and includes several deliveries.
     * - order_partially_delivered: The order is in progress and one of several deliveries is delivered.
     * - order_canceled: The order is canceled.
     * - order_locked: The order is locked.
     */
    export enum autoProcessState {
        ORDER_COMPLETED_SINGLE_DELIVERY = 'order_completed_single_delivery',
        ORDER_COMPLETED_MULTIPLE_DELIVERIES = 'order_completed_multiple_deliveries',
        ORDER_PARTIALLY_DELIVERED = 'order_partially_delivered',
        ORDER_CANCELED = 'order_canceled',
        ORDER_LOCKED = 'order_locked',
    }


}
