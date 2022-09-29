/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { order } from './order';

/**
 * A collection of shop orders
 */
export type orderCollection = (collection & {
    data?: Array<order>,
});
