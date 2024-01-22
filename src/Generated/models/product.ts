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
     * The shop to which the product belongs.
     */
    shopCode?: string,
    /**
     * Status of the product regarding sales. \
     * Available values:
     * - enabled: Product is on sale
     * - enabled_external_only: Product is only available in external stores
     * - deleted: Product is deleted
     * - discontinued: Product is discontinued
     * - expired: Product is expired
     * - incorrect: Product was incorrectly created
     * - internal: Product is available for internal sales only
     * - preparation: Product is in preparation for sale
     */
    productStatus?: product.productStatus | null,
    /**
     * Title of the Product.
     */
    productTitle?: string | null,
    /**
     * Original title of the Product.
     */
    productTitleOriginal?: string | null,
    /**
     * Short description of the article.
     */
    articleShortDescription?: string | null,
    /**
     * Long description of the article.
     */
    articleLongDescription?: string | null,
    /**
     * The TARIC Code of the product.
     */
    taricCode?: string | null,
    /**
     * The list price of the product in EUR.
     */
    listPriceEUR?: number | null,
    /**
     * One of the available tax codes.
     * - default: Default tax rate (in e.g. Austria 20 %)
     * - reduced1: 1st reduced tax rate (in e.g. Austria 13 %)
     * - reduced2: 2nd reduced tax rate (in e.g. Austria 10 %)
     * - none: not taxable (0%)
     *
     * Note: This can be null if the tax code could not be determined.
     */
    taxCode: product.taxCode | null,
    /**
     * Number of the manufacturer. \
     * Manufacturers can be queried with a GET /manufacturer call. \
     * Note: This can be null in some cases (e.g. if the product is a bundle).
     */
    manufacturerNumber?: string | null,
    /**
     * Number of the supplier. \
     * Suppliers can be queried with a GET /supplier call. \
     * Note: This can be null in some cases (e.g. if the product is a bundle).
     */
    supplierNumber?: string | null,
    /**
     * The source of the product.
     * - self: Own product
     * - nice: Product of another supplier
     * - bundle: Product that is composed of individual positions
     */
    source?: product.source,
    /**
     * Number of the brand. \
     * Brands can be queried with a GET /brand call. \
     * Note: This can be null in some cases (e.g. if the product is a bundle).
     */
    brandNumber?: string | null,
});

export namespace product {

    /**
     * Status of the product regarding sales. \
     * Available values:
     * - enabled: Product is on sale
     * - enabled_external_only: Product is only available in external stores
     * - deleted: Product is deleted
     * - discontinued: Product is discontinued
     * - expired: Product is expired
     * - incorrect: Product was incorrectly created
     * - internal: Product is available for internal sales only
     * - preparation: Product is in preparation for sale
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
     *
     * Note: This can be null if the tax code could not be determined.
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
