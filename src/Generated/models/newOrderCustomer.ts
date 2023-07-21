/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseOrderCustomer } from './baseOrderCustomer';
import type { orderCustomerAddress } from './orderCustomerAddress';

export type newOrderCustomer = (baseOrderCustomer & {
    /**
     * The customer's first name.\
     * Note: This field is required for invoicing and whether it is available or not depends on the used shopCode.\
     * Use the GET /shop endpoint to check if the meta.invoiceEnabled of the shop is set to true.\
     * Because of internal requirements, this field may be set with a fallback, if it is not provided.\
     * If a lastname is provided, this field is required.
     */
    firstname?: string | null,
    /**
     * The customer's last name.\
     * Note: This field is required for invoicing and whether it is available or not depends on the used shopCode.\
     * Use the GET /shop endpoint to check if the meta.invoiceEnabled of the shop is set to true.\
     * Because of internal requirements, this field may be set with a fallback, if it is not provided.\
     * If a lastname is provided, this field is required.
     */
    lastname?: string | null,
    /**
     * The customer's invoice address.\
     * Note: This field is required for invoicing and whether it is available or not depends on the used shopCode.\
     * Use the GET /shop endpoint to check if the meta.invoiceEnabled of the shop is set to true.\
     * Because of internal requirements, fields of this array may be set with a fallback, if it is not provided.
     */
    invoiceAddress?: orderCustomerAddress | null,
});
