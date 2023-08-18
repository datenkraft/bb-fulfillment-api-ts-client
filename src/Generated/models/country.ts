/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { countryProvinces } from './countryProvinces';

/**
 * Data to represent a country, steve can ship to
 */
export type country = {
    /**
     * Country code (ISO 3166-1 alpha-2)
     */
    countryCode?: string;
    /**
     * Country name
     */
    name?: string;
    /**
     * Specifies whether or not a phone number is required when using a shipping address in the country
     */
    phoneRequired?: boolean;
    /**
     * Specifies whether or not customs clearance is necessary
     */
    customsClearanceRequired?: boolean;
    provinces?: Array<countryProvinces> | null;
    /**
     * The currency code which should be used for orders to the country (ISO 4217)
     */
    currencyCode?: string;
}
