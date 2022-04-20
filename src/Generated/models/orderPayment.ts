/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Options regarding the payment of the order
 */
export type orderPayment = {
    /**
     * The payment method
     */
    type: orderPayment.type;
}

export namespace orderPayment {

    /**
     * The payment method
     */
    export enum type {
        INVOICE = 'invoice',
    }


}
