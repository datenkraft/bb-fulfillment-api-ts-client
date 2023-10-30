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
     * - totalCount: The total number of items in the collection will be calculated. \
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                422: `Unprocessable Entity`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

}