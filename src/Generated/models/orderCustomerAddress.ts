/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type orderCustomerAddress = {
    street: string;
    /**
     * Note: Must not contain more than 5 letters
     */
    streetNumber: string;
    zipCode: string;
    district?: string | null;
    city: string;
    /**
     * Mandatory if province codes for country (GET /country) exist
     * (ISO 3166-2) - https://www.iso.org/iso-3166-country-codes.html
     */
    provinceCode?: string | null;
    /**
     * Country code (ISO 3166-1 alpha-2)
     */
    countryCode: string;
}
