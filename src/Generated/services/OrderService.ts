/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { newOrder } from '../models/newOrder';
import type { order } from '../models/order';
import { request as __request } from '../core/request';

export class OrderService {

    /**
     * Get an order by order number.
     * Get an order by order number.
     * @param orderNumber The order number as defined during the creation of the order.
     * @param shopCode The shopCode used in DISCO (optional).
     * @returns order OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getOrder(
        orderNumber: string,
        shopCode?: string,
    ): Promise<order | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/order/${orderNumber}`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                404: `Not Found
                 *
                 * Error codes:
                 * - DATA_NOT_FOUND: The requested data could not be found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - SHOP_NOT_FOUND: Shop not found.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Add a new order.
     * Add a new order referenced by the given orderNumber.
     * @param orderNumber The number the order should be referred by. This number is user defined, must be unique and has a maximum
     * length (check maxLength field).
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns order Created
     * @throws ApiError
     */
    public static async postOrder(
        orderNumber: string,
        requestBody: newOrder,
    ): Promise<errorResponse | order> {
        const result = await __request({
            method: 'POST',
            path: `/order/${orderNumber}`,
            body: requestBody,
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - PRODUCT_NOT_FOUND: Unknown productNumber.
                 * - DUPLICATED_PRODUCT: There are multiple orderItems with the same productNumber.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Cancel an order.
     * Cancel the order specified by the given order number (set in param orderNumber).
     * @param orderNumber The number the order is referred by.
     * @param shopCode The shopCode used in DISCO (optional).
     * @returns order OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async cancelOrder(
        orderNumber: string,
        shopCode?: string,
    ): Promise<order | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/order/${orderNumber}/cancel`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                404: `Not Found
                 *
                 * Error codes:
                 * - DATA_NOT_FOUND: The requested data could not be found.`,
                409: `Conflict
                 *
                 * Error codes:
                 * - ORDER_NOT_CANCELABLE: The order could not be canceled anymore.
                 * - ORDER_ALREADY_CANCELED: The order is already canceled.
                 * - ORDER_CANCELLATION_ALREADY_EXISTS: An order cancellation request already exists, which needs manual approval.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - SHOP_NOT_FOUND: Shop not found.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

}