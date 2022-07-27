/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { inboundDelivery } from './inboundDelivery';

/**
 * A collection of inbound deliveries
 */
export type inboundDeliveryCollection = (collection & {
    data?: Array<inboundDelivery>,
});
