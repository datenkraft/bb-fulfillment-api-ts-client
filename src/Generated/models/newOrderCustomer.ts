/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrderCustomer } from './baseOrderCustomer';

export type newOrderCustomer = (baseOrderCustomer & {
    /**
     * The provided data is used to generate a unique email with orderNumber and shopCode, which must result in a valid email.
     */
    email?: string,
});
