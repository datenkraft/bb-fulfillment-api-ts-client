/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newInboundDelivery } from './newInboundDelivery';

/**
 * Data to represent an inbound delivery
 */
export type inboundDelivery = (newInboundDelivery & {
    inboundDeliveryNumber?: string,
});
