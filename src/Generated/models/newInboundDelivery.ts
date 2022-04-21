/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { inboundDeliveryProduct } from './inboundDeliveryProduct';

/**
 * Data to create a new inbound delivery
 */
export type newInboundDelivery = {
    /**
     * Number of the supplier
     */
    supplierNumber: string;
    /**
     * Expected date of the delivery
     */
    expectedDeliveryDate: string;
    /**
     * Products in the inbound delivery
     */
    products: Array<inboundDeliveryProduct>;
}
