/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { collectionPagination } from './collectionPagination';
import type { stock } from './stock';

/**
 * A collection of stocks
 */
export type stockCollection = (collection & {
    data?: Array<stock>,
} & collectionPagination);
