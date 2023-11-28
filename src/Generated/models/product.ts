/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProduct } from './baseProduct';

/**
 * Data to represent a product
 */
export type product = (baseProduct & {
    productNumber?: string,
    /**
     * The shop to which the product belongs
     */
    shopCode?: string,
    /**
     * Status of the product regarding sales.\
     * Available values:
     * - enabled: Product is on sale
     * - enabled_external_only: Product is only available in external stores
     * - deleted: Product is deleted
     * - discontinued: Product is discontinued
     * - expired: Product is expired
     * - incorrect: Product was incorrectly created
     * - internal: Product is available for internal sales only
     * - preparation: Product is in preparation for sale\
     *
     * Note: This can be null if the product was not created via the API.
     */
    productStatus?: product.productStatus | null,
    /**
     * Title of the Product\
     * Note: This can be null if the product was not created via the API.
     */
    productTitle?: string | null,
    /**
     * Original title of the Product\
     * Note: This can be null if the product was not created via the API.
     */
    productTitleOriginal?: string | null,
    /**
     * Short description of the article\
     * Note: This can be null if the product was not created via the API.
     */
    articleShortDescription?: string | null,
    /**
     * Long description of the article\
     * Note: This can be null if the product was not created via the API.
     */
    articleLongDescription?: string | null,
    /**
     * The TARIC Code of the product\
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
     * - default: Default tax rate (in e.g. Austria 20 %)
     * - reduced1: 1st reduced tax rate (in e.g. Austria 13 %)
     * - reduced2: 2nd reduced tax rate (in e.g. Austria 10 %)
     * - none: not taxable (0%)
     */
    taxCode: product.taxCode | null,
    /**
     * Number of the manufacturer\
     * Note: This can be null if the product was not created via the API.
     */
    manufacturerNumber?: string | null,
    /**
     * Number of the supplier.\
     * Note: This can be null if the product was not created via the API.
     */
    supplierNumber?: string | null,
    /**
     * The source of the product.
     * - self: Own product
     * - nice: Product of another supplier
     * - bundle: Product that is composed of individual positions
     */
    source?: product.source,
});

export namespace product {

    /**
     * Status of the product regarding sales.\
     * Available values:
     * - enabled: Product is on sale
     * - enabled_external_only: Product is only available in external stores
     * - deleted: Product is deleted
     * - discontinued: Product is discontinued
     * - expired: Product is expired
     * - incorrect: Product was incorrectly created
     * - internal: Product is available for internal sales only
     * - preparation: Product is in preparation for sale\
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

    /**
     * The source of the product.
     * - self: Own product
     * - nice: Product of another supplier
     * - bundle: Product that is composed of individual positions
     */
    export enum source {
        SELF = 'self',
        NICE = 'nice',
        BUNDLE = 'bundle',
    }


}
