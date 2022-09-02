/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { delivery } from '../models/delivery';
import type { deliveryCollection } from '../models/deliveryCollection';
import type { deliveryServiceCollection } from '../models/deliveryServiceCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class DeliveryService {

    /**
     * Get delivery services.
     * Get delivery services.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @returns deliveryServiceCollection OK
     * @throws ApiError
     */
    public static async getDeliveryServiceCollection(
        page?: number,
        pageSize?: number,
    ): Promise<deliveryServiceCollection> {
        const result = await __request({
            method: 'GET',
            path: `/delivery-service`,
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
        return result.body;
    }

    /**
     * Get the delivery with the given deliveryNumber.
     * Get the delivery with the given deliveryNumber.
     * @param deliveryNumber delivery number
     * @param shopCode The shopCode used internally to distinguish between clients.<br />
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns delivery OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDelivery(
        deliveryNumber: string,
        shopCode?: string,
    ): Promise<delivery | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/delivery/${deliveryNumber}`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
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
     * Get deliveries filtered by a single or multiple order numbers.
     * Get deliveries filtered by a single or multiple order numbers.
     * @param filterOrderNumber A filter for a single order number or multiple order numbers separted by a comma.
     * - The filter can contain a maximum of 100 order numbers.
     * - The order numbers in the filter must be unique.
     * - A single order number can have a maximum length of 59 characters.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param shopCode The shopCode used internally to distinguish between clients.<br />
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns deliveryCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDeliveryCollection(
        filterOrderNumber: string,
        page?: number,
        pageSize?: number,
        shopCode?: string,
    ): Promise<deliveryCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/delivery`,
            query: {
                'filter[orderNumber]': filterOrderNumber,
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