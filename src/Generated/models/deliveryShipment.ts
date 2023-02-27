/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { shipmentLine } from './shipmentLine';

/**
 * A shipments defines a single delivered entity (package, parcel, pallet, ...)
 */
export type deliveryShipment = {
    /**
     * The delivery number
     */
    number?: string;
    /**
     * Status of the delivery.
     * - in_progress: The delivery is in the process of being packaged.
     * - delivered: The delivery has been transferred to the delivery agent.
     */
    status?: deliveryShipment.status;
    /**
     * The delivery service used to send this delivery.
     * The codes of supported delivery services can be retrieved from the 'GET /delivery-service' endpoint.
     */
    deliveryService?: string | null;
    /**
     * Carrier specific tracking code
     */
    code?: string;
    /**
     * Link to the carrier's tracking site
     */
    link?: string;
    /**
     * Weight
     */
    weight?: number;
    /**
     * Weight unit
     */
    weightUnit?: string;
    /**
     * Shipment lines
     */
    shipmentLines?: Array<shipmentLine>;
}

export namespace deliveryShipment {

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
