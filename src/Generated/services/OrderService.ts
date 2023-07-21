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
     * Get a list of shop oders.
     * Get a list of shop orders.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. This can mean loss of performance.
     * @param sortBy Sort the results by one or more comma-separated sort criteria, with the criterion specified first having priority.
     *
     * Available sort orders:
     * - asc: ascending order
     * - desc: descending order
     *
     * Available fields for sorting:
     * - orderDate
     *
     * The default sort order is orderDate:desc.
     * @param filterShopCode The shopCode used internally to distinguish between clients.\
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterStatus Filter for status/statuses (optional).
     * @param filterExternalOrderId Filter for the external order ID e.g. from third party apps (optional)
     * @param filterExternalCustomerId Filter for the external customer ID e.g. from third party apps (optional)
     * @param filterExternalOrderReference filter for externalOrderReference
     * @param filterOrderDateFrom filter for orderDate format in ISO 8601 with UTC offsets
     * @param filterOrderDateTo filter for orderDate format in ISO 8601 with UTC offsets
     * @param filterSearch filter for order search.\
     * \
     * Usage:
     * - Provide one or multiple search terms to filter results.
     * - Multiple search terms are separated by spaces.
     * - The search is not case sensitive.
     * - The search is enabled for the fields 'externalOrderReference' and 'orderNumber'.
     * - Each search term filters the response for orders where at least one of the fields contains the search term.
     * - For example, filter[search]='term1 term2' will filter the result for orders where 'term1' is found in any field and 'term2' is also found in any field.\
     * If only 'term1' or 'term2' is found in the fields, the order is not included in the results.
     * @returns orderCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getOrderCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        sortBy?: string,
        filterShopCode?: string,
        filterStatus?: string,
        filterExternalOrderId?: string,
        filterExternalCustomerId?: string,
        filterExternalOrderReference?: string,
        filterOrderDateFrom?: string,
        filterOrderDateTo?: string,
        filterSearch?: string,
    ): Promise<orderCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/order`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'sortBy': sortBy,
                'filter[shopCode]': filterShopCode,
                'filter[status]': filterStatus,
                'filter[externalOrderId]': filterExternalOrderId,
                'filter[externalCustomerId]': filterExternalCustomerId,
                'filter[externalOrderReference]': filterExternalOrderReference,
                'filter[orderDateFrom]': filterOrderDateFrom,
                'filter[orderDateTo]': filterOrderDateTo,
                'filter[search]': filterSearch,
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

    /**
     * Get an order by order number.
     * Get an order by order number.
     * @param orderNumber The order number as defined during the creation of the order.
     * @param shopCode The shopCode used internally to distinguish between clients.\
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
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
     * @param orderNumber The number the order should be refered by.\
     * This number is user defined, must be unique and has a maximum length (check maxLength field).\
     * Please ensure that it does not contain any of the following character sequences: '/', '%2F', '%2f', '?', '%3F', '%3f',
     * '#', '%23', '&', '%26'. Using any of these will result in the route not being handled correctly.
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
                422: `Unprocessable Entity
                 *
                 * Available message codes:
                 * - PRODUCT_NOT_FOUND: A product could not be found.
                 * - DUPLICATED_PRODUCT: There are multiple orderItems with the same productNumber.
                 * - ORDER_CUSTOMS_CLEARANCE_REQUIRED_FIELD_MISSING: A field required for customs clearance is missing.
                 * - ORDER_NUMBER_STARTS_WITH_RESERVED_NUMBER_PREFIX: The orderNumber starts with a prefix that is reserved for internal
                 * references.
                 * - ORDER_INVALID_CURRENCY_CODE: An invalid currencyCode was given for the delivery country.`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Cancel an order.
     * Cancel the order specified by the given order number (set in param orderNumber).\
     * An orderNumber from a canceled order cannot be used for a new order, because they must always be unique.
     * @param orderNumber The number the order is refered by.
     * @param shopCode The shopCode used internally to distinguish between clients.\
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
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
     * Redact an order.
     * Redact the order and all other orders linked to the given order number (set in the param
     * orderNumber) in a GDPR article 17 conform way. \
     *
     * Only orders with one of the following statuses are redactable:
     * - delivered
     * - deleted
     * - canceled
     * @param orderNumber The number the order is refered by.
     * @param shopCode The shopCode used internally to distinguish between clients.\
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns order OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async redactOrder(
        orderNumber: string,
        shopCode?: string,
    ): Promise<order | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/order/${orderNumber}/redact`,
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
                 * - ORDER_NOT_REDACTABLE: The order is not redactable because of status conflicts
                 * - ORDER_ALREADY_REDACTED: The order is already redacted`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}