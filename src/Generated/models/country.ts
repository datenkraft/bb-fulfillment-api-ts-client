/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
}
