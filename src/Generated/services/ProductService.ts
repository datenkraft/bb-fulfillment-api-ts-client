/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { newProduct } from '../models/newProduct';
import type { product } from '../models/product';
import type { productCollection } from '../models/productCollection';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * Get a product by product number.
     * Get a product by product number.
     * @param productNumber The product number as defined during the creation of the product.
     * @param shopCode The shopCode used in DISCO (optional).
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
     * @param productNumber The number the product should be refered by. This number is user defined, must be unique and has a maximum length (check maxLength field).
     * @param requestBody
     * @param shopCode The shopCode used in DISCO (optional).
     * @returns errorResponse Unexpected error
     * @returns product Created
     * @throws ApiError
     */
    public static async postProduct(
        productNumber: string,
        requestBody: newProduct,
        shopCode?: string,
    ): Promise<errorResponse | product> {
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
     * @param filterShopCode The shopCode used in DISCO (optional).
     * @returns productCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getProductCollection(
        page?: number,
        pageSize?: number,
        filterShopCode?: string,
    ): Promise<productCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/product`,
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