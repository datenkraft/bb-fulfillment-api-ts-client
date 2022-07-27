/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productPurchasePrice } from './productPurchasePrice';

/**
 * Data to create a new product
 */
export type newProduct = {
    /**
     * Type of the product ('standard' if no value is provided)
     */
    productType: newProduct.productType;
    /**
     * Title of the product
     */
    productTitle: string;
    /**
     * Original title of the product
     */
    productTitleOriginal: string;
    /**
     * Status of the product regarding sales ('enabled' if no value is provided)
     */
    productStatus: newProduct.productStatus | null;
    /**
     * Short description of the article
     */
    articleShortDescription: string;
    /**
     * Long description of the article
     */
    articleLongDescription: string;
    /**
     * The title of the article variant. \
     * Must not be set when the articleVariantType is 'standard_autotitle'.
     */
    articleVariantTitle?: string | null;
    /**
     * The type of the article variant ('standard_autotitle' if no value is provided). \
     * The articleVariantType 'standard_autotitle' is only allowed for the variantGroup 'content'
     */
    articleVariantType: newProduct.articleVariantType | null;
    /**
     * Status of the article regarding visibility ('active' if no value is provided)
     */
    articleStatus: newProduct.articleStatus | null;
    /**
     * Amount of the product contents (1 if no value is provided)
     */
    contentsAmount: number | null;
    /**
     * Unit of the product contents ('stk' if no value is provided).
     */
    contentsUnit: string | null;
    /**
     * Weight of the product contents in gram
     */
    contentsWeightGram?: number | null;
    /**
     * Total weight of the product in gram
     */
    weightGram?: number | null;
    /**
     * The variant group of the product
     */
    variantGroup: newProduct.variantGroup;
    /**
     * The EAN of the product
     */
    ean?: string | null;
    /**
     * The TARIC code of the product
     */
    taricCode: string;
    /**
     * The list price of the product in EUR
     */
    listPriceEUR: number;
    /**
     * The suggested retail price for the product in EUR
     */
    suggestedRetailPriceEUR?: number | null;
    /**
     * One of the available tax codes.
     * - std: Standard tax rate (AT 20%)
     * - spc: 1st tax rate (AT 13%)
     * - erm: 2nd tax rate (AT 10%)
     * - erm3: 3rd tax rate (AT 5%)
     * - nsp: not taxable (0%)
     */
    taxCode: newProduct.taxCode;
    purchasePrices?: Array<productPurchasePrice> | null;
    /**
     * Number of the manufacturer.
     */
    manufacturerNumber: string;
    /**
     * Country code of the manufacturer (ISO 3166-1 alpha-2)
     */
    manufacturerCountryCode: string | null;
    /**
     * Number of the supplier
     */
    supplierNumber: string;
    /**
     * The language code used for the product (ISO 639-1)
     */
    languageCode: string;
}

export namespace newProduct {

    /**
     * Type of the product ('standard' if no value is provided)
     */
    export enum productType {
        STANDARD = 'standard',
        SAMPLE = 'sample',
        SELLABLE_SAMPLE = 'sellable_sample',
        TESTER = 'tester',
        PACKING_MATERIAL = 'packing_material',
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
     * Status of the product regarding sales ('enabled' if no value is provided)
     */
    export enum productStatus {
        ENABLED = 'enabled',
        ENABLED_EXTERNAL_ONLY = 'enabled_external_only',
    }

    /**
     * The type of the article variant ('standard_autotitle' if no value is provided). \
     * The articleVariantType 'standard_autotitle' is only allowed for the variantGroup 'content'
     */
    export enum articleVariantType {
        STANDARD = 'standard',
        STANDARD_AUTOTITLE = 'standard_autotitle',
        PERSONALIZED = 'personalized',
    }

    /**
     * Status of the article regarding visibility ('active' if no value is provided)
     */
    export enum articleStatus {
        ACTIVE = 'active',
        TEMPORARY_INACTIVE = 'temporary_inactive',
        PREPARATION_INACTIVE = 'preparation_inactive',
        INACTIVE_BUT_VISIBLE = 'inactive_but_visible',
        INACTIVE = 'inactive',
    }

    /**
     * The variant group of the product
     */
    export enum variantGroup {
        COLOR = 'color',
        SIZE = 'size',
        CONTENT = 'content',
        EINZELVARIANTE = 'einzelvariante',
        STANDARD_TITLE = 'standard_title',
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
