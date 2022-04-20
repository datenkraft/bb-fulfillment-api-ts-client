/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type orderCustomerAddress = {
    street: string;
    streetNumber: string;
    zipCode: string;
    district?: string | null;
    city: string;
    /**
     * Province code (ISO 3166-2)
     */
    provinceCode?: string | null;
    /**
     * Country code (ISO 3166-1 alpha-2)
     */
    countryCode: string;
}
