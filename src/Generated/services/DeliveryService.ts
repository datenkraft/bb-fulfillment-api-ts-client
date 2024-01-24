/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { delivery } from '../models/delivery';
import type { deliveryCollection } from '../models/deliveryCollection';
import type { deliveryServiceCollection } from '../models/deliveryServiceCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class DeliveryService {

    /**
     * Get delivery services.
     * Get delivery services.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @returns deliveryServiceCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDeliveryServiceCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
    ): Promise<deliveryServiceCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/delivery-service`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
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
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Get deliveries filtered by orderNumber.
     * Get deliveries filtered by orderNumber.
     * @param filterOrderNumber A filter with the orderNumber as given during the creation of the order.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @param shopCode The shopCode used in DISCO (optional).
     * @returns deliveryCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDeliveryCollection(
        filterOrderNumber: string,
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        shopCode?: string,
    ): Promise<deliveryCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/delivery`,
            query: {
                'filter[orderNumber]': filterOrderNumber,
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'shopCode': shopCode,
            },
            errors: {
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
     * Get the delivery with the given deliveryNumber.
     * Get the delivery with the given deliveryNumber.
     * @param deliveryNumber delivery number
     * @param shopCode The shopCode used in DISCO (optional).
     * @returns delivery OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDelivery(
        deliveryNumber: string,
        shopCode?: string,
    ): Promise<delivery | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/delivery/${deliveryNumber}`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
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

}