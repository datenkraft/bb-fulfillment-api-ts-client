/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { reportInventoryMovement } from './reportInventoryMovement';

/**
 * A collection of inventory movement entries
 */
export type reportInventoryMovementEntryCollection = (collection & {
    /**
     * Data of the collection
     */
    data?: Array<reportInventoryMovement>,
});
