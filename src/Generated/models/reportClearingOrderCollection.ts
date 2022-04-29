/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { collectionPagination } from './collectionPagination';
import type { reportClearingOrder } from './reportClearingOrder';

/**
 * A collection of orders for clearing
 */
export type reportClearingOrderCollection = (collection & {
    data?: Array<reportClearingOrder>,
} & collectionPagination);
