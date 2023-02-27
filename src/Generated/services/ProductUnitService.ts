/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { productUnitCollection } from '../models/productUnitCollection';
import { request as __request } from '../core/request';

export class ProductUnitService {

    /**
     * Get all available product unit codes
     * Get all available product unit codes.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param shopCode The shopCode used internally to distinguish between clients.\
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns productUnitCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getProductUnitCollection(
        page?: number,
        pageSize?: number,
        shopCode?: string,
    ): Promise<productUnitCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/product-unit`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'shopCode': shopCode,
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