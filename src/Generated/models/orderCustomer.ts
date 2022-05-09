/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrderCustomer } from './baseOrderCustomer';

export type orderCustomer = (baseOrderCustomer & {
    number?: string | null,
    /**
     * The customer type
     */
    type?: string | null,
});
