/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { delivery } from '../models/delivery';
import type { deliveryCollection } from '../models/deliveryCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class DeliveryService {

    /**
     * Get the delivery with the given deliveryNumber.
     * Get the delivery with the given deliveryNumber.
     * @param deliveryNumber delivery number
     * @param shopCode The shopCode used in DISCO (optional).
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
     * Get deliveries filtered by orderNumber.
     * Get deliveries filtered by orderNumber.
     * @param filterOrderNumber A filter with the orderNumber as given during the creation of the order.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param shopCode The shopCode used in DISCO (optional).
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