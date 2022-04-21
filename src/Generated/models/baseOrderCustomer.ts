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
}

export namespace baseOrderCustomer {

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
        UNKNOWN = 'unknown',
    }


}
