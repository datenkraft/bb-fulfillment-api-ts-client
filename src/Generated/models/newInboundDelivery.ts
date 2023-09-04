/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newInboundDeliveryProduct } from './newInboundDeliveryProduct';

/**
 * Data to create a new inbound delivery.
 */
export type newInboundDelivery = {
    /**
     * Optional free-text reference for inbound delivery.
     */
    inboundDeliveryName?: string | null;
    /**
     * Number of the supplier.\
     * Available suppliers can be retrieved from the 'GET /supplier' endpoint.
     */
    supplierNumber: string;
    /**
     * Expected date of the delivery (timezone CET/CEST)
     */
    expectedDeliveryDate: string;
    /**
     * Products in the inbound delivery
     */
    products: Array<newInboundDeliveryProduct>;
}
