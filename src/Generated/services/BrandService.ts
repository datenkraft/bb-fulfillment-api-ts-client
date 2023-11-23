/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { brandCollection } from '../models/brandCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class BrandService {

    /**
     * Get all available brands for a shop code.
     * Get all available brands for a shop code.
     * @param filterShopCode The shopCode used internally to distinguish between clients.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @returns brandCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getBrandCollection(
        filterShopCode: string,
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
    ): Promise<brandCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/brand`,
            query: {
                'filter[shopCode]': filterShopCode,
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