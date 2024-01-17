/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderCustomerDeliveryAddress } from './orderCustomerDeliveryAddress';
import type { orderCustomerInvoiceAddress } from './orderCustomerInvoiceAddress';

export type baseOrderCustomer = {
    email: string;
    firstname: string;
    lastname: string;
    gender: baseOrderCustomer.gender;
    title?: string | null;
    phone?: string | null;
    /**
     * The language code for any customer communications (ISO 639-1)
     */
    languageCode: string;
    company?: string | null;
    /**
     * Company vat number
     */
    companyVatNumber?: string | null;
    invoiceAddress: orderCustomerInvoiceAddress;
    /**
     * If not given the invoice address is used for delivery.
     */
    deliveryAddress?: orderCustomerDeliveryAddress | null;
}

export namespace baseOrderCustomer {

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
        UNKNOWN = 'unknown',
    }


}
