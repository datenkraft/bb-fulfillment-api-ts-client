/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Inventory movement entry
 */
export type reportInventoryMovementEntry = {
    /**
     * The type code of the movement entry
     */
    typeCode?: reportInventoryMovementEntry.typeCode;
    /**
     * The amount of moved stock
     */
    stock?: number;
    /**
     * The reference of the movement entry
     */
    reference?: {
        /**
         * Name of the Company
         */
        companyName?: string | null,
    };
}

export namespace reportInventoryMovementEntry {

    /**
     * The type code of the movement entry
     */
    export enum typeCode {
        ADDED = 'added',
        SUBTRACTED = 'subtracted',
        CORRECTED = 'corrected',
        FOR_OWN_PURPOSE = 'forOwnPurpose',
        RETURNED = 'returned',
    }


}
