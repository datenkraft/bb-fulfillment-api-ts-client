/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newInboundDeliveryProduct } from './newInboundDeliveryProduct';

/**
 * Data to create a new inbound delivery
 */
export type newInboundDelivery = {
    /**
     * Number of the supplier. Available suppliers can be retrieved from the 'GET /supplier' endpoint.
     */
    supplierNumber: string;
    /**
     * Expected date of the delivery
     */
    expectedDeliveryDate: string;
    /**
     * Products in the inbound delivery
     */
    products: Array<newInboundDeliveryProduct>;
}
