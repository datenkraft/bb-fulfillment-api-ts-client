/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProduct } from './baseProduct';
import type { variantGroupEnum } from './variantGroupEnum';

/**
 * Data to create a new product
 */
export type newProduct = (baseProduct & {
    variantGroup?: variantGroupEnum,
    /**
     * Status of the product regarding sales.
     *
     * Available values:
     * - enabled: Product is on sale (default)
     * - enabled_external_only: Product is only available in external stores
     */
    productStatus: newProduct.productStatus | null,
    /**
     * Title of the product
     */
    productTitle?: string,
    /**
     * Original title of the product
     */
    productTitleOriginal?: string,
    /**
     * Short description of the article.
     */
    articleShortDescription?: string,
    /**
     * Long description of the article
     */
    articleLongDescription?: string,
    /**
     * The TARIC code of the product
     */
    taricCode?: string,
    /**
     * The list price of the product in EUR
     */
    listPriceEUR?: number,
    /**
     * One of the available tax codes.
     * - std: Standard tax rate (AT 20%)
     * - spc: 1st tax rate (AT 13%)
     * - erm: 2nd tax rate (AT 10%)
     * - erm3: 3rd tax rate (AT 5%)
     * - nsp: not taxable (0%)
     */
    taxCode?: newProduct.taxCode,
    /**
     * Number of the manufacturer.
     */
    manufacturerNumber?: string,
    /**
     * Number of the supplier
     */
    supplierNumber?: string,
});

export namespace newProduct {

    /**
     * Status of the product regarding sales.
     *
     * Available values:
     * - enabled: Product is on sale (default)
     * - enabled_external_only: Product is only available in external stores
     */
    export enum productStatus {
        ENABLED = 'enabled',
        ENABLED_EXTERNAL_ONLY = 'enabled_external_only',
    }

    /**
     * One of the available tax codes.
     * - std: Standard tax rate (AT 20%)
     * - spc: 1st tax rate (AT 13%)
     * - erm: 2nd tax rate (AT 10%)
     * - erm3: 3rd tax rate (AT 5%)
     * - nsp: not taxable (0%)
     */
    export enum taxCode {
        STD = 'std',
        SPC = 'spc',
        ERM = 'erm',
        ERM3 = 'erm3',
        NSP = 'nsp',
    }


}
