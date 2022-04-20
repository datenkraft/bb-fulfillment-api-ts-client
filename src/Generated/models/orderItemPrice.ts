/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type orderItemPrice = {
    /**
     * The price value rounded to 2 decimals, dot as separator
     */
    value: number;
    /**
     * The price type
     */
    type: orderItemPrice.type;
    /**
     * The VAT in percent
     */
    vat: number;
    /**
     * The currency code (ISO 4217)
     */
    currencyCode: string;
}

export namespace orderItemPrice {

    /**
     * The price type
     */
    export enum type {
        NET = 'net',
        GROSS = 'gross',
    }


}
