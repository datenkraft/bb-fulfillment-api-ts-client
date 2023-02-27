/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { stockCollection } from '../models/stockCollection';
import { request as __request } from '../core/request';

export class StockService {

    /**
     * Get the stock for all (per default only valid) products or for a specific product.
     * Get the stock for all (per default only valid) products or for a specific product.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param filterProductNumber Filter for product number(s) (optional).
     * @param filterShopCode The shopCode used internally to distinguish between clients.\
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterProductStatus filter for productStatus\
     * By default, only valid products (available or in stock) are returned.\
     * Use '_all' to return all products (also invalid products)\
     * Use '_invalid' to specifically return invalid products (not available and out of stock)
     * @returns stockCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getStockCollection(
        page?: number,
        pageSize?: number,
        filterProductNumber?: string,
        filterShopCode?: string,
        filterProductStatus?: '_all' | '_invalid',
    ): Promise<stockCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/stock`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'filter[productNumber]': filterProductNumber,
                'filter[shopCode]': filterShopCode,
                'filter[productStatus]': filterProductStatus,
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