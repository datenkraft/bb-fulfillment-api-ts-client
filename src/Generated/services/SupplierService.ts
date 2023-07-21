/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { supplierCollection } from '../models/supplierCollection';
import { request as __request } from '../core/request';

export class SupplierService {

    /**
     * Get suppliers filtered by shopCode.
     * Get suppliers filtered by shopCode.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. This can mean loss of performance.
     * @param filterShopCode The shopCode used internally to distinguish between clients.\
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns supplierCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getSupplierCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        filterShopCode?: string,
    ): Promise<supplierCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/supplier`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'filter[shopCode]': filterShopCode,
            },
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

}