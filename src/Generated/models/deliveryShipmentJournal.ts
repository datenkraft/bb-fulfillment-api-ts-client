/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Journal entries of a delivery shipment
 */
export type deliveryShipmentJournal = {
    /**
     * The create date for the entry. Format in ISO 8601.
     */
    date: string;
    /**
     * The type code of the journal entry.
     */
    typeCode: deliveryShipmentJournal.typeCode;
}

export namespace deliveryShipmentJournal {

    /**
     * The type code of the journal entry.
     */
    export enum typeCode {
        FULFILLMENT_CREATED = 'fulfillment_created',
        FULFILLMENT_LEFT_WAREHOUSE = 'fulfillment_left-warehouse',
        FULFILLMENT_DELIVERED = 'fulfillment_delivered',
    }


}
