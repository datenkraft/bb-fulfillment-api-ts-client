/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderItemPrice } from './orderItemPrice';

export type newOrderItemPrice = (orderItemPrice & {
    /**
     * The VAT in percent
     */
    vat?: number,
}) | null;
