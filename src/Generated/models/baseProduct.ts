/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productPurchasePrice } from './productPurchasePrice';
import type { variantGroupEnum } from './variantGroupEnum';

/**
 * Data to represent a product
 */
export type baseProduct = {
    /**
     * Type of the product
     */
    productType: baseProduct.productType;
    /**
     * The title of the article variant. \
     * Must not be set when the articleVariantType is 'standard_autotitle'.
     */
    articleVariantTitle?: string | null;
    /**
     * The type of the article variant. \
     * The articleVariantType 'standard_autotitle' is only allowed for the variantGroup 'content'
     */
    articleVariantType: baseProduct.articleVariantType | null;
    /**
     * Status of the article regarding visibility ('active' if no value is provided)
     */
    articleStatus: baseProduct.articleStatus | null;
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
    variantGroup: (variantGroupEnum | string);
    /**
     * The EAN of the product
     */
    ean?: string | null;
    /**
     * The suggested retail price for the product in EUR
     */
    suggestedRetailPriceEUR?: number | null;
    purchasePrices?: Array<productPurchasePrice> | null;
    /**
     * Country code of the manufacturer (ISO 3166-1 alpha-2)
     */
    manufacturerCountryCode: string | null;
    /**
     * The language code used for the product (ISO 639-1)
     */
    languageCode: string;
}

export namespace baseProduct {

    /**
     * Type of the product
     */
    export enum productType {
        STANDARD = 'standard',
        CHILLED_PRODUCT = 'chilled_product',
        SAMPLE = 'sample',
        SELLABLE_SAMPLE = 'sellable_sample',
        TESTER = 'tester',
        PACKING_MATERIAL = 'packing_material',
        LIMITED_EDITION = 'limited_edition',
        BOOKING_SEMINAR = 'booking_seminar',
        BOOKING_APPOINTMENT = 'booking_appointment',
        VOUCHER_PRINT = 'voucher_print',
        VOUCHER_DIGITAL = 'voucher_digital',
        BUNDLE = 'bundle',
        PRINT_GREETINGCARD = 'print_greetingcard',
        PROMO_MATERIAL = 'promo_material',
        PERSONALIZED = 'personalized',
        RAW_MATERIAL = 'raw_material',
        WORKING_MATERIAL = 'working_material',
        SERVICE_PRINCIPAL = 'service_principal',
        SERVICE_ANCILLARY = 'service_ancillary',
        INQUIRY_TESTDRIVE = 'inquiry_testdrive',
        INQUIRY_RAFFLE = 'inquiry_raffle',
        OTHER_SERVICES = 'other_services',
    }

    /**
     * The type of the article variant. \
     * The articleVariantType 'standard_autotitle' is only allowed for the variantGroup 'content'
     */
    export enum articleVariantType {
        BOOKING_APPOINTMENT = 'booking_appointment',
        BOOKING_SEMINAR = 'booking_seminar',
        BUNDLE = 'bundle',
        BUNDLE_CHANGEABLE = 'bundle_changeable',
        BUNDLE_CONFIGURABLE = 'bundle_configurable',
        GENERIC = 'generic',
        INQUIRY_RAFFLE = 'inquiry_raffle',
        INQUIRY_TESTDRIVE = 'inquiry_testdrive',
        OTHER_SERVICES = 'other_services',
        PERSONALIZED = 'personalized',
        PRINT_GREETINGCARD = 'print_greetingcard',
        SERVICE_ANCILLARY = 'service_ancillary',
        SERVICE_PRINCIPAL = 'service_principal',
        STANDARD = 'standard',
        STANDARD_AUTOTITLE = 'standard_autotitle',
        VOUCHER_DIGITAL = 'voucher_digital',
        VOUCHER_PRINT = 'voucher_print',
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


}
