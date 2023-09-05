/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProduct } from './baseProduct';

/**
 * Data to create a new product
 */
export type newProduct = (baseProduct & {
    /**
     * Type of the product
     */
    productType: newProduct.productType,
    /**
     * Status of the product regarding sales.\
     * Available values:
     * - enabled: Product is on sale (default)
     * - enabled_external_only: Product is only available in external stores
     */
    productStatus: newProduct.productStatus | null,
    /**
     * The type of the article variant. \
     * The articleVariantType 'standard_autotitle' is only allowed for the variantGroup 'content'
     */
    articleVariantType: newProduct.articleVariantType | null,
    /**
     * Title of the Product
     */
    productTitle?: string,
    /**
     * Original title of the Product
     */
    productTitleOriginal?: string,
    /**
     * Short description of the article
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
    taxCode: newProduct.taxCode,
    /**
     * Number of the manufacturer
     */
    manufacturerNumber?: string,
    /**
     * Number of the supplier.\
     * A list from available suppliers can be queried with the GET /supplier endpoint
     */
    supplierNumber?: string,
});

export namespace newProduct {

    /**
     * Type of the product
     */
    export enum productType {
        STANDARD = 'standard',
        SAMPLE = 'sample',
        SELLABLE_SAMPLE = 'sellable_sample',
        TESTER = 'tester',
        PACKAGING_MATERIAL = 'packaging_material',
        BOOKING_SEMINAR = 'booking_seminar',
        BOOKING_APPOINTMENT = 'booking_appointment',
        PROMO_MATERIAL = 'promo_material',
        RAW_MATERIAL = 'raw_material',
        WORKING_MATERIAL = 'working_material',
        SERVICE_PRINCIPAL = 'service_principal',
        SERVICE_ANCILLARY = 'service_ancillary',
        INQUIRY_TESTDRIVE = 'inquiry_testdrive',
        INQUIRY_RAFFLE = 'inquiry_raffle',
    }

    /**
     * Status of the product regarding sales.\
     * Available values:
     * - enabled: Product is on sale (default)
     * - enabled_external_only: Product is only available in external stores
     */
    export enum productStatus {
        ENABLED = 'enabled',
        ENABLED_EXTERNAL_ONLY = 'enabled_external_only',
    }

    /**
     * The type of the article variant. \
     * The articleVariantType 'standard_autotitle' is only allowed for the variantGroup 'content'
     */
    export enum articleVariantType {
        STANDARD = 'standard',
        STANDARD_AUTOTITLE = 'standard_autotitle',
        PERSONALIZED = 'personalized',
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
        NSB = 'nsb',
    }


}
