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
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. This can mean loss of
     * performance.
     * @param sortBy Sort the results by one or more comma-separated sort criteria, with the criterion specified first having
     * priority.
     *
     * Available sort orders:
     * - asc: ascending order
     * - desc: descending order
     *
     * Available fields for sorting:
     * - productNumber
     * - stocked
     * - reserved
     * - available
     * - incoming
     *
     * The default sort order is stocked:desc.
     * @param filterProductNumber Filter for product number(s) (optional).
     * @param filterShopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterProductStatus Filter for productStatus\
     * By default, only valid products (available or in stock) are returned. \
     * Use '_all' to return all products (also invalid products). \
     * Use '_invalid' to specifically return invalid products (not available and out of stock).
     * @returns stockCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getStockCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        sortBy?: string,
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
                'paginationMode': paginationMode,
                'sortBy': sortBy,
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