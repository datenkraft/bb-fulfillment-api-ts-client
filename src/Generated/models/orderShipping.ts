/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Options regarding the shipping of the order
 */
export type orderShipping = {
    /**
     * The delivery service to recommend for usage. \
     * The codes of supported delivery services can be retrieved from the 'GET /delivery-service' endpoint.
     */
    deliveryService: string;
}
