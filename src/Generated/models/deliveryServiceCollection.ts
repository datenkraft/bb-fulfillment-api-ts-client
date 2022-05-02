/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { collectionPagination } from './collectionPagination';
import type { deliveryService } from './deliveryService';

/**
 * A collection of delivery services
 */
export type deliveryServiceCollection = (collection & {
    data?: Array<deliveryService>,
} & collectionPagination);
