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
     * @param filterProductNumber product number
     * @param filterShopCode The shopCode used in DISCO (optional).
     * @returns stockCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getStockCollection(
        page?: number,
        pageSize?: number,
        filterProductNumber?: string,
        filterShopCode?: string,
    ): Promise<stockCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/stock`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'filter[productNumber]': filterProductNumber,
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