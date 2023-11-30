/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { deliveryShipmentJournal } from './deliveryShipmentJournal';
import type { shipmentLine } from './shipmentLine';

/**
 * A shipments defines a single delivered entity (package, parcel, pallet, ...)
 */
export type deliveryShipment = {
    /**
     * The shipment number
     */
    number?: string;
    /**
     * Status of the delivery.
     * - delivered: The delivery has been transferred to the delivery agent.
     */
    status?: deliveryShipment.status;
    /**
     * The delivery service used to send this delivery.\
     * The codes of supported delivery services can be retrieved from the 'GET /delivery-service' endpoint.
     */
    deliveryService?: string | null;
    /**
     * Carrier specific tracking code
     */
    code?: string;
    /**
     * Link to the carrier's specific tracking site
     */
    link?: string;
    weight?: number;
    /**
     * Weight unit
     */
    weightUnit?: string;
    /**
     * Shipment lines
     */
    shipmentLines?: Array<shipmentLine>;
    /**
     * External id of the shipment
     */
    externalShipmentId?: string | null;
    /**
     * Journal entries regarding the shipment
     */
    journal?: Array<deliveryShipmentJournal>;
    /**
     * Packaging dimensions
     */
    packaging?: {
        /**
         * Height in cm
         */
        height?: number,
        /**
         * Width in cm
         */
        width?: number,
        /**
         * Depth in cm
         */
        depth?: number,
    };
}

export namespace deliveryShipment {

    /**
     * Status of the delivery.
     * - delivered: The delivery has been transferred to the delivery agent.
     */
    export enum status {
        DELIVERED = 'delivered',
    }


}
