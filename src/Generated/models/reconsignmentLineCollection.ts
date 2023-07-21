/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { reconsignmentLine } from './reconsignmentLine';

/**
 * A collection of reconsignment lines
 */
export type reconsignmentLineCollection = (collection & {
    /**
     * Class ReconsignmentLineResourceCollection
     */
    data?: Array<reconsignmentLine>,
});
