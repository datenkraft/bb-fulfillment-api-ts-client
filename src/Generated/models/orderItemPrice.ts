/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderPrice } from './orderPrice';

/**
 * The selling price of the item.\
 * Note: This field is required if the delivery address of the order requires customs clearance.
 */
export type orderItemPrice = (orderPrice & {
    /**
     * The VAT in percent. Can be null in case of bundle products with mixedVAT percentages. (might be validated for country)
     */
    vat?: number | null,
}) | null;
