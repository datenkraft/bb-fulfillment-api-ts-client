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
     * Stock subtracted in the period
     */
    stockSubtracted?: number;
    /**
     * Stock corrections in the period
     */
    stockCorrected?: number;
    /**
     * Stock used for internal purposes in the period
     */
    stockUsedForOwnPurposes?: number;
    /**
     * Stock returned in the period
     */
    stockReturned?: number;
    movementEntries?: Array<reportInventoryMovementEntry>;
}
