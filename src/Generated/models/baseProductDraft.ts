/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data to represent a product draft
 */
export type baseProductDraft = {
    /**
     * Product number to be used for the final product
     */
    productNumber?: string;
    /**
     * Title of the Product
     */
    productTitle?: string;
    /**
     * Amount of the product contents
     */
    contentsAmount: number;
    /**
     * Unit of the product contents ('stk' if no value is provided).\
     * Valid units can be queried with a GET /product-unit call
     */
    contentsUnit: string;
    /**
     * Weight of the product contents in gram
     */
    contentsWeightGram?: number;
    /**
     * Total weight of the product in gram
     */
    weightGram?: number;
    /**
     * The EAN of the product
     */
    ean?: string | null;
    /**
     * The TARIC Code of the product
     */
    taricCode?: string;
    /**
     * The suggested retail price for the product in EUR
     */
    suggestedRetailPriceEUR?: number;
    /**
     * The net list price of the product in EUR
     */
    listPriceEUR?: number;
    /**
     * One of the available tax codes.
     * - default: Default tax rate (in e.g. Austria 20 %)
     * - reduced1: 1st reduced tax rate (in e.g. Austria 13 %)
     * - reduced2: 2nd reduced tax rate (in e.g. Austria 10 %)
     * - none: not taxable (0%)
     */
    taxCode: baseProductDraft.taxCode;
    /**
     * Number of the supplier.\
     * Valid suppliers can be queried with a GET /supplier call
     */
    supplierNumber?: string;
    /**
     * Number of the manufacturer.\
     * Valid manufacturers can be queried with a GET /manufacturer call
     */
    manufacturerNumber?: string;
    /**
     * Number of the brand.\
     * Valid brands can be queried with a GET /brand call
     */
    brandNumber?: string;
}

export namespace baseProductDraft {

    /**
     * One of the available tax codes.
     * - default: Default tax rate (in e.g. Austria 20 %)
     * - reduced1: 1st reduced tax rate (in e.g. Austria 13 %)
     * - reduced2: 2nd reduced tax rate (in e.g. Austria 10 %)
     * - none: not taxable (0%)
     */
    export enum taxCode {
        DEFAULT = 'default',
        REDUCED1 = 'reduced1',
        REDUCED2 = 'reduced2',
        NONE = 'none',
    }


}
