/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { inboundDeliveryProduct } from './inboundDeliveryProduct';
import type { newInboundDelivery } from './newInboundDelivery';

/**
 * Data to represent an inbound delivery
 */
export type inboundDelivery = (newInboundDelivery & {
    /**
     * The inbound delivery number.\
     * Note: If this number is prefixed with 'NICE', it means that the inbound delivery was created was created manually by niceshops.
     */
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
     * The shopCode used internally to distinguish between clients.
     */
    shopCode?: string | null,
    /**
     * Start date of the delivery (timezone CET/CEST)
     */
    startDate?: string | null,
    /**
     * End date of the delivery (timezone CET/CEST)
     */
    endDate?: string | null,
    /**
     * Number of the inbound delivery on the delivery slip.
     * If the field is empty or not set in the database (e.g. the inbound delivery has not yet arrived in our warehouse), null will be returned.
     * If an empty string (") is returned, it means that no delivery slip number is available for the inbound delivery.
     */
    deliverySlipNumber?: string | null,
    /**
     * Creation date of the inbound delivery. Format in ISO 8601 (timezone CET/CEST)
     */
    createDate?: string | null,
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
