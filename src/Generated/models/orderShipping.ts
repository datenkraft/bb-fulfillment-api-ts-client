/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Options regarding the shipping of the order
 */
export type orderShipping = {
    /**
     * The delivery service to recommend for usage.
     */
    deliveryService: orderShipping.deliveryService;
}

export namespace orderShipping {

    /**
     * The delivery service to recommend for usage.
     */
    export enum deliveryService {
        POST_AT = 'post_at',
        DHL = 'dhl',
        DACHSER = 'dachser',
    }


}
