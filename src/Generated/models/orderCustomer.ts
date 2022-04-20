/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrderCustomer } from './baseOrderCustomer';

export type orderCustomer = (baseOrderCustomer & {
    /**
     * Customer number if an existing account should be used for the order
     */
    number?: string | null,
    /**
     * The customer type
     */
    type?: string | null,
});
