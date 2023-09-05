/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderCustomerAddress } from './orderCustomerAddress';
import type { orderCustomerDeliveryAddress } from './orderCustomerDeliveryAddress';

export type baseOrderCustomer = {
    gender: baseOrderCustomer.gender;
    /**
     * The language code for any customer communications (ISO 639-1). Currently only 'de' is supported
     */
    languageCode: string;
    /**
     * The external id of the order customer
     */
    externalCustomerId?: string | null;
    deliveryAddress: orderCustomerDeliveryAddress;
    /**
     * The customer's email
     */
    email?: string | null;
    /**
     * The customer's phone number, preferably in the DIN 5008 format, like: +43 2236 123456-7890
     */
    phone?: string | null;
    /**
     * The customer's first name.\
     * Note: This field is required for invoicing and whether it is available or not depends on the used shopCode.\
     * Use the GET /shop endpoint to check if the meta.invoiceEnabled of the shop is set to true.
     */
    firstname?: string | null;
    /**
     * The customer's last name.\
     * Note: This field is required for invoicing and whether it is available or not depends on the used shopCode.\
     * Use the GET /shop endpoint to check if the meta.invoiceEnabled of the shop is set to true.
     */
    lastname?: string | null;
    /**
     * The customer's title.\
     * Note: This field is required for invoicing and whether it is available or not depends on the used shopCode.\
     * Use the GET /shop endpoint to check if the meta.invoiceEnabled of the shop is set to true.
     */
    title?: string | null;
    /**
     * The customer's company name.\
     * Note: This field is required for invoicing and whether it is available or not depends on the used shopCode.\
     * Use the GET /shop endpoint to check if the meta.invoiceEnabled of the shop is set to true.
     */
    company?: string | null;
    /**
     * The customer's company vat number (might be validated).\
     * Note: This field is required for invoicing and whether it is available or not depends on the used shopCode.\
     * Use the GET /shop endpoint to check if the meta.invoiceEnabled of the shop is set to true.
     */
    companyVatNumber?: string | null;
    /**
     * The customer's invoice address.\
     * Note: This field is required for invoicing and whether it is available or not depends on the used shopCode.\
     * Use the GET /shop endpoint to check if the meta.invoiceEnabled of the shop is set to true.
     */
    invoiceAddress?: orderCustomerAddress | null;
}

export namespace baseOrderCustomer {

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
        UNKNOWN = 'unknown',
    }


}
