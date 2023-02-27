/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { shop } from './shop';

/**
 * A collection of shops
 */
export type shopCollection = (collection & {
    data?: Array<shop>,
});
