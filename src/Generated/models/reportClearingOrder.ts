/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An order for clearing
 */
export type reportClearingOrder = {
    /**
     * The order number. Note: This can be null if the order was not created via the API.
     */
    orderNumber?: string;
    /**
     * The API internal id of the order.
     */
    shopOrderId?: number;
    deliveryZipCode?: string;
    deliveryCountryCode?: string;
}
