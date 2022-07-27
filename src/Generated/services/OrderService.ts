/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { newOrder } from '../models/newOrder';
import type { order } from '../models/order';
import type { orderCollection } from '../models/orderCollection';
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Add a new order.
     * Add a new order referenced by the given orderNumber.
     * @param orderNumber The number the order should be refered by. This number is user defined, must be unique and has a maximum length (check maxLength field).
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Cancel an order.
     * Cancel the order specified by the given order number (set in param orderNumber).
     * @param orderNumber The number the order is refered by.
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict
                 *
                 * Available message codes:
                 * - ORDER_NOT_CANCELABLE: The order could not be canceled anymore
                 * - ORDER_ALREADY_CANCELED: The order is already canceled
                 * - ORDER_CANCELLATION_ALREADY_EXISTS: An order cancellation request already exists, which needs manual approval`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get a list of shop oders.
     * Get a list of shop orders.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param filterShopCode The shopCode used in DISCO (optional).
     * @param filterStatus Filter for status/statuses (optional).
     * @returns orderCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getOrderCollection(
        page?: number,
        pageSize?: number,
        filterShopCode?: string,
        filterStatus?: string,
    ): Promise<orderCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/order`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'filter[shopCode]': filterShopCode,
                'filter[status]': filterStatus,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}