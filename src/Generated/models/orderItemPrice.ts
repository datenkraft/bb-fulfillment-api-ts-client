/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type orderItemPrice = {
    /**
     * The price value rounded to 2 decimals with a dot used as separator. Note: This price value refers to
     * a single unit and is not an aggregated price value, which may be calculated by multiplying this price value by the
     * corresponding item count.
     */
    value: number;
    /**
     * The price type
     */
    type: orderItemPrice.type;
    /**
     * The VAT in percent. Can be null in case of bundle products with mixed VAT percentages.
     */
    vat: number | null;
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
