/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The delivery for the order. Details can be read by GET /delivery/.
 */
export type orderDelivery = {
    number?: string;
    /**
     * Status of the delivery.
     * - delivered: The delivery has been transferred to the delivery agent.
     */
    status?: orderDelivery.status;
}

export namespace orderDelivery {

    /**
     * Status of the delivery.
     * - delivered: The delivery has been transferred to the delivery agent.
     */
    export enum status {
        DELIVERED = 'delivered',
    }


}
