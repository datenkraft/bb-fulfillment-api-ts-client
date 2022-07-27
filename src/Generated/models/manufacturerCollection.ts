/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { manufacturer } from './manufacturer';

/**
 * A collection of manufacturers
 */
export type manufacturerCollection = (collection & {
    data?: Array<manufacturer>,
});
