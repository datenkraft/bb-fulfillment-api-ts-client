/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { inboundDeliveryProduct } from './inboundDeliveryProduct';
import type { newInboundDelivery } from './newInboundDelivery';

/**
 * Data to represent an inbound delivery
 */
export type inboundDelivery = (newInboundDelivery & {
    inboundDeliveryNumber?: string | null,
    /**
     * The API internal id of the inbound delivery.
     */
    shopWAWIDeliveryId?: number,
    /**
     * Status of the inbound delivery.
     * The status for not yet completed is subject to change. you may poll for changes.
     * - open: The inbound delivery has not yet been delivered.
     * - in_progress: The inbound delivery is being processed in our warehouse.
     * - completed: The inbound delivery has been processed in our warehouse.
     * - deleted: The inbound delivery has been deleted.
     */
    status?: inboundDelivery.status,
    /**
     * Products in the inbound delivery
     */
    products?: Array<inboundDeliveryProduct>,
    /**
     * The shopCode used in DISCO.
     */
    shopCode?: string | null,
    /**
     * Start date of the delivery
     */
    startDate?: string | null,
    /**
     * End date of the delivery
     */
    endDate?: string | null,
});

export namespace inboundDelivery {

    /**
     * Status of the inbound delivery.
     * The status for not yet completed is subject to change. you may poll for changes.
     * - open: The inbound delivery has not yet been delivered.
     * - in_progress: The inbound delivery is being processed in our warehouse.
     * - completed: The inbound delivery has been processed in our warehouse.
     * - deleted: The inbound delivery has been deleted.
     */
    export enum status {
        IN_PROGRESS = 'in_progress',
        OPEN = 'open',
        COMPLETED = 'completed',
        DELETED = 'deleted',
    }


}
