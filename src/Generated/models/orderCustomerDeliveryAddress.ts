/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderCustomerAddress } from './orderCustomerAddress';

export type orderCustomerDeliveryAddress = (orderCustomerAddress & {
    nameLine1: string,
    nameLine2?: string | null,
});
