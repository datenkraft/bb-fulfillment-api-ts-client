/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { deliveryShipment } from './deliveryShipment';

/**
 * A delivery of the order
 */
export type delivery = {
    /**
     * Number
     */
    number?: string;
    /**
     * The order number. Note: This can be null if the delivery has no associated order.
     */
    orderNumber?: string | null;
    /**
     * Status of the delivery.
     * - in_progress: The delivery is in the process of being packaged.
     * - delivered: The delivery has been transferred to the delivery agent.
     */
    status?: delivery.status;
    /**
     * List of shipments (= package, parcel, pallet, ...)
     */
    shipments?: Array<deliveryShipment>;
}

export namespace delivery {

    /**
     * Status of the delivery.
     * - in_progress: The delivery is in the process of being packaged.
     * - delivered: The delivery has been transferred to the delivery agent.
     */
    export enum status {
        IN_PROGRESS = 'in_progress',
        DELIVERED = 'delivered',
    }


}
