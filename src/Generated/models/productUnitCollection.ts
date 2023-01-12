/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { productUnit } from './productUnit';

/**
 * A collection of product units
 */
export type productUnitCollection = (collection & {
    data?: Array<productUnit>,
});
