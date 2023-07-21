/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProduct } from './baseProduct';

/**
 * Data to represent a product
 */
export type product = (baseProduct & {
    /**
     * Title of the product.\
     * Note: This can be null if the product was not created via the API.
     */
    productTitle?: string | null,
    /**
     * Original title of the product.\
     * Note: This can be null if the product was not created via the API.
     */
    productTitleOriginal?: string | null,
    /**
     * Status of the product regarding sales.\
     * Available values:
     * - enabled: Product is on sale
     * - enabled_external_only: Product is only available in external stores
     * - deleted: Product is deleted
     * - discontinued: Product is disontinued
     * - expired: Product is expired
     * - incorrect: Product was incorrectly created
     * - internal: Product is available for internal sales only
     * - preparation: Product is in preparation for sale
     *
     * Note: This can be null if the product was not created via the API.
     */
    productStatus?: product.productStatus | null,
    /**
     * Short description of the article.\
     * Note: This can be null if the product was not created via the API.
     */
    articleShortDescription?: string | null,
    /**
     * Long description of the article.\
     * Note: This can be null if the product was not created via the API.
     */
    articleLongDescription?: string | null,
    /**
     * The TARIC code of the product.\
     * Note: This can be null if the product was not created via the API.
     */
    taricCode?: string | null,
    /**
     * The list price of the product in EUR.\
     * Note: This can be null if the product was not created via the API.
     */
    listPriceEUR?: number | null,
    /**
     * One of the available tax codes.
     * - std: Standard tax rate (AT 20%)
     * - spc: 1st tax rate (AT 13%)
     * - erm: 2nd tax rate (AT 10%)
     * - erm3: 3rd tax rate (AT 5%)
     * - nsp: not taxable (0%)
     *
     * Note: This can be null if the product was not created via the API.
     */
    taxCode?: product.taxCode | null,
    /**
     * Number of the manufacturer.\
     * Note: This can be null if the product was not created via the API.
     */
    manufacturerNumber?: string | null,
    /**
     * Number of the supplier.\
     * Note: This can be null if the product was not created via the API.
     */
    supplierNumber?: string | null,
    productNumber?: string,
    /**
     * The shop to which the product belongs
     */
    shopCode?: string,
    /**
     * The source of the product.
     * - self: Own product
     * - nice: Product of another supplier
     * - bundle: Product that is composed of individual positions
     */
    source?: string,
});

export namespace product {

    /**
     * Status of the product regarding sales.\
     * Available values:
     * - enabled: Product is on sale
     * - enabled_external_only: Product is only available in external stores
     * - deleted: Product is deleted
     * - discontinued: Product is disontinued
     * - expired: Product is expired
     * - incorrect: Product was incorrectly created
     * - internal: Product is available for internal sales only
     * - preparation: Product is in preparation for sale
     *
     * Note: This can be null if the product was not created via the API.
     */
    export enum productStatus {
        ENABLED = 'enabled',
        ENABLED_EXTERNAL_ONLY = 'enabled_external_only',
        DELETED = 'deleted',
        DISCONTINUED = 'discontinued',
        EXPIRED = 'expired',
        INCORRECT = 'incorrect',
        INTERNAL = 'internal',
        PREPARATION = 'preparation',
    }

    /**
     * One of the available tax codes.
     * - std: Standard tax rate (AT 20%)
     * - spc: 1st tax rate (AT 13%)
     * - erm: 2nd tax rate (AT 10%)
     * - erm3: 3rd tax rate (AT 5%)
     * - nsp: not taxable (0%)
     *
     * Note: This can be null if the product was not created via the API.
     */
    export enum taxCode {
        STD = 'std',
        SPC = 'spc',
        ERM = 'erm',
        ERM3 = 'erm3',
        NSP = 'nsp',
    }


}
