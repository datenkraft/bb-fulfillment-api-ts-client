/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Stock of a product
 */
export type stock = {
    /**
     * Product number
     */
    productNumber?: string;
    /**
     * Amount stocked in the warehouse - without considering the reserved amount for ongoing orders
     */
    stocked?: number;
    /**
     * Amount reserved for ongoing orders
     */
    reserved?: number;
    /**
     * Amount available for orders - with the reserved amount for ongoing orders taken into account
     */
    available?: number;
    /**
     * Amount of ongoing inbound deliveries
     */
    incoming?: number;
    /**
     * Status regarding the possibility of overbooking
     * - possible: Overbooking is possible
     * - not_possible: Overbooking is not possible
     * - only_inbound_deliveries: Overbooking is only possible for the amount in ongoing inbound deliveries
     */
    overbookingPossibilityStatus?: stock.overbookingPossibilityStatus;
}

export namespace stock {

    /**
     * Status regarding the possibility of overbooking
     * - possible: Overbooking is possible
     * - not_possible: Overbooking is not possible
     * - only_inbound_deliveries: Overbooking is only possible for the amount in ongoing inbound deliveries
     */
    export enum overbookingPossibilityStatus {
        POSSIBLE = 'possible',
        NOT_POSSIBLE = 'not_possible',
        ONLY_INBOUND_DELIVERIES = 'only_inbound_deliveries',
    }


}
