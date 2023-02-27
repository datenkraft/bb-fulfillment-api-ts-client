/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { delivery } from './delivery';

/**
 * A collection of deliveries
 */
export type deliveryCollection = (collection & {
    data?: Array<delivery>,
});
