/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The delivery for the order. Details can be read by GET /delivery/.
 */
export type orderDelivery = {
    number?: string;
    /**
     * Status code of the delivery
     */
    status?: string;
}
