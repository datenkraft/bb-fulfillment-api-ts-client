/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderCustomerDeliveryAddress } from './orderCustomerDeliveryAddress';

export type baseOrderCustomer = {
    gender: baseOrderCustomer.gender;
    /**
     * The language code for any customer communications (ISO 639-1)
     */
    languageCode: string;
    deliveryAddress: orderCustomerDeliveryAddress;
    /**
     * The customer's phone number, preferably in the DIN 5008 format, like:+43 2236 123456-7890
     */
    phone?: string | null;
}

export namespace baseOrderCustomer {

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
        UNKNOWN = 'unknown',
    }


}
