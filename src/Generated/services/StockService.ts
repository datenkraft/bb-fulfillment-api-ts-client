/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { stockCollection } from '../models/stockCollection';
import { request as __request } from '../core/request';

export class StockService {

    /**
     * Get the stock for all products or for a specific product.
     * Get the stock for all products or for a specific product.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @param filterProductNumber product number
     * @param filterShopCode The shopCode used in DISCO (optional).
     * @returns stockCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getStockCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        filterProductNumber?: string,
        filterShopCode?: string,
    ): Promise<stockCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/stock`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'filter[productNumber]': filterProductNumber,
                'filter[shopCode]': filterShopCode,
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