/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { product } from './product';

/**
 * A collection of products
 */
export type productCollection = (collection & {
    data?: Array<product>,
});
