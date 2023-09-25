/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { reportInventoryMovementEntry } from './reportInventoryMovementEntry';

/**
 * Inventory Movement
 */
export type reportInventoryMovement = {
    /**
     * Number of the product
     */
    productNumber?: string;
    /**
     * Stock at the start of the period
     */
    stockStart?: number;
    /**
     * Stock at the end of the period
     */
    stockEnd?: number;
    /**
     * Stock added in the period
     */
    stockAdded?: number;
    /**
     * Stock subtracted (internal and external) in the period
     */
    stockSubtracted?: number;
    /**
     * Stock subtracted in the period.\
     * Note: 'stockSubtracted' already contains 'stockSubtractedExternal'.
     */
    stockSubtractedExternal?: number;
    /**
     * Stock corrections in the period
     */
    stockCorrected?: number;
    /**
     * Stock used for internal purposes in the period
     */
    stockUsedForOwnPurposes?: number;
    /**
     * Stock returned (internal and external) in the period
     */
    stockReturned?: number;
    /**
     * Stock subtracted in the period.\
     * Note: 'stockReturned' already contains 'stockReturnedExternal'.
     */
    stockReturnedExternal?: number;
    movementEntries?: Array<reportInventoryMovementEntry>;
}
