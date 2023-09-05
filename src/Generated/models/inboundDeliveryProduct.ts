/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newInboundDeliveryProduct } from './newInboundDeliveryProduct';

export type inboundDeliveryProduct = (newInboundDeliveryProduct & {
    /**
     * Title of the product
     */
    productTitle?: string,
    /**
     * Number of actual delivered products in the inbound delivery
     */
    deliveredCount?: number,
});
