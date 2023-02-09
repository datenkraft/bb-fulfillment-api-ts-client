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
     * Get a product by product number.
     * Get a product by product number.
     * @param productNumber The product number as defined during the creation of the product.
     * @param shopCode The shopCode used internally to distinguish between clients.<br />
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns product OK
     * @returns errorResponse Unexpected error
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
                404: `Not Found`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Add a new product.
     * Add a new product referenced by the given productNumber.
     * Please note that due to necessary product compliance enabling by our steve team, you might not be able to use all sent products immediately.
     * @param productNumber The number the product should be refered by.
     * This number is user defined, must be unique and has a maximum length (check maxLength field).
     * @param requestBody
     * @param shopCode The shopCode used internally to distinguish between clients.<br />
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns errorResponse Unexpected error
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
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get a list of products.
     * Get a list of products.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param filterShopCode The shopCode used internally to distinguish between clients.<br />
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterSearch Filter for product search.\
     * Usage:
     * - Provide one or multiple search terms to filter results.
     * - Multiple search terms are separated by spaces.
     * - The search is not case sensitive.
     * - The search is enabled for the fields productTitle and productNumber.
     * - Each search term filters the response for products where at least one of the fields contains the search term.
     * - For example, filter[search]='term1 term2' will filter the result for products where 'term1' is found in any field and 'term2' is also found in any field.\
     * If only 'term1' or 'term2' is found in the fields, the product is not included in the results.
     * @returns productCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getProductCollection(
        page?: number,
        pageSize?: number,
        filterShopCode?: string,
        filterSearch?: string,
    ): Promise<productCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/product`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'filter[shopCode]': filterShopCode,
                'filter[search]': filterSearch,
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

    /**
     * Read a journal collection for a specific product showing the history of stock changes.
     * Read a journal collection for a specific product showing the history of stock changes.
     * @param productNumber The product number as defined during the creation of the product.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param shopCode The shopCode used internally to distinguish between clients.<br />
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterDateFrom The start date (inclusive) in format Y-m-d (timezone CET/CEST) for which product journal entries should be returned.
     * @param filterDateTo The end date (inclusive) in format Y-m-d (timezone CET/CEST) for which product journal entries should be returned.
     * @returns productJournalCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getProductJournalCollection(
        productNumber: string,
        page?: number,
        pageSize?: number,
        shopCode?: string,
        filterDateFrom?: string,
        filterDateTo?: string,
    ): Promise<productJournalCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/product/${productNumber}/journal`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'shopCode': shopCode,
                'filter[dateFrom]': filterDateFrom,
                'filter[dateTo]': filterDateTo,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}