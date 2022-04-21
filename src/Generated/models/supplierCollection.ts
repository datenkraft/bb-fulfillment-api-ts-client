/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { collectionPagination } from './collectionPagination';
import type { supplier } from './supplier';

/**
 * A collection of suppliers
 */
export type supplierCollection = (collection & {
    data?: Array<supplier>,
} & collectionPagination);
