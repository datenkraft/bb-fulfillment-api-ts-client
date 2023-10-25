/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { brand } from './brand';
import type { collection } from './collection';

/**
 * A collection of brands
 */
export type brandCollection = (collection & {
    /**
     * Data of the collection
     */
    data?: Array<brand>,
});
