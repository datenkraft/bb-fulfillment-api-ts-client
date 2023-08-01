/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { informationResponse } from '../models/informationResponse';
import type { newProduct } from '../models/newProduct';
import type { product } from '../models/product';
import type { productCollection } from '../models/productCollection';
import type { productJournalCollection } from '../models/productJournalCollection';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * Get a list of products.
     * Get a list of products.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. \
     * This can mean loss of performance.
     * @param filterShopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterSearch Filter for product search. \
     * Usage:
     * - Provide one or multiple search terms to filter results.
     * - Multiple search terms are separated by spaces.
     * - The search is not case sensitive.
     * - The search is enabled for the fields productTitle, productNumber and ean.
     * - Each search term filters the response for products where at least one of the
     * fields contains the search term.
     * - For example, filter[search]='term1 term2' will filter the result for products where 'term1'
     * is found in any field and 'term2' is also found in any field.
     * If only 'term1' or 'term2' is found in the fields, the product is not included in the results.
     * @param filterSource Filter for product source.
     * @returns productCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getProductCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        filterShopCode?: string,
        filterSearch?: string,
        filterSource?: 'self' | 'nice' | 'bundle',
    ): Promise<productCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/product`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'filter[shopCode]': filterShopCode,
                'filter[search]': filterSearch,
                'filter[source]': filterSource,
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

    /**
     * Get a product by product number.
     * Get a product by product number.
     * @param productNumber The product number as defined during the creation of the product.
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns product OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getProduct(
        productNumber: string,
        shopCode?: string,
    ): Promise<product | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/product/${productNumber}`,
            query: {
                'shopCode': shopCode,
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

    /**
     * Add a new product
     * Add a new product referenced by the given productNumber. \
     * _Please note that due to necessary product compliance enabling by our steve team,
     * the product might not be usable immediately.
     * The product number is nevertheless reserved, even before the product can be queried in the GET endpoint._
     * @param productNumber The number the product should be referred by. \
     * This number is user defined, must be unique and has a maximum length (check maxLength field).\
     * Please ensure that it does not contain any of the following character sequences:
     * '/', '%2F', '%2f', '?', '%3F', '%3f', '#', '%23', '&', '%26'.
     * Using any of these will result in the route not being handled correctly.
     * @param requestBody
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns errorResponse Unexpected Error
     * @returns informationResponse Created
     * @throws ApiError
     */
    public static async postProduct(
        productNumber: string,
        requestBody: newProduct,
        shopCode?: string,
    ): Promise<errorResponse | informationResponse> {
        const result = await __request({
            method: 'POST',
            path: `/product/${productNumber}`,
            query: {
                'shopCode': shopCode,
            },
            body: requestBody,
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

    /**
     * Read a journal collection for a specific product showing the history of stock changes.
     * Read a journal collection for a specific product showing the history of stock changes.
     * _Only products with the source 'self' can be queried._
     * @param productNumber The product number as defined during the creation of the product.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:\
     * - default: The total number of items in the collection will not be calculated.\
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @param shopCode The shopCode used internally to distinguish between clients.\
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterDateFrom The start date (inclusive) in format Y-m-d (timezone CET/CEST) for which product journal entries should be returned.
     * @param filterDateTo The end date (inclusive) in format Y-m-d (timezone CET/CEST) for which product journal entries should be returned.
     * @param filterReason Filter journal entries for one or more reasons
     * - expired: Taking an expired product off the books
     * - damaged: Taking a damaged product off the books
     * - own_withdrawl: Product taken for own use
     * - correction: Manual correction
     * - niceshops_order: Product sold via a shop from niceshops
     * - inbound: Restocking the product
     * - fulfillment: steve fulfilled an order
     * - return: A customer sent the product back to our warehouse
     * @returns productJournalCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getProductJournalCollection(
        productNumber: string,
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        shopCode?: string,
        filterDateFrom?: string,
        filterDateTo?: string,
        filterReason?: string,
    ): Promise<productJournalCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/product/${productNumber}/journal`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'shopCode': shopCode,
                'filter[dateFrom]': filterDateFrom,
                'filter[dateTo]': filterDateTo,
                'filter[reason]': filterReason,
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