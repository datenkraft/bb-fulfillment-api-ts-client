/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { manufacturerCollection } from '../models/manufacturerCollection';
import { request as __request } from '../core/request';

export class ManufacturerService {

    /**
     * Get a list of manufacturers.
     * Get a list of manufacturers.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param filterShopCode The shopCode used internally to distinguish between clients.\
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns manufacturerCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getManufacturerCollection(
        page?: number,
        pageSize?: number,
        filterShopCode?: string,
    ): Promise<manufacturerCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/manufacturer`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'filter[shopCode]': filterShopCode,
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