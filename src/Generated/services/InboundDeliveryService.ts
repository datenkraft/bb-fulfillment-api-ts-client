/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { inboundDelivery } from '../models/inboundDelivery';
import type { inboundDeliveryCollection } from '../models/inboundDeliveryCollection';
import type { newInboundDelivery } from '../models/newInboundDelivery';
import { request as __request } from '../core/request';

export class InboundDeliveryService {

    /**
     * Get an inbound delivery by inbound delivery number.
     * Get an inbound delivery by inbound delivery number.
     * @param inboundDeliveryNumber The inbound delivery number as defined during the creation of the inbound delivery.
     * @param shopCode The shopCode used internally to distinguish between clients.<br />
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns inboundDelivery OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getInboundDelivery(
        inboundDeliveryNumber: string,
        shopCode?: string,
    ): Promise<inboundDelivery | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/inbound-delivery/${inboundDeliveryNumber}`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Add a new inbound delivery.
     * Add a new inbound delivery referenced by the given deliveryNumber.
     * @param inboundDeliveryNumber The number the inbound delivery should be refered by.
     * This number is user defined, must be unique and has a maximum length (check maxLength field).
     * @param requestBody
     * @param shopCode The shopCode used internally to distinguish between clients.<br />
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns errorResponse Unexpected error
     * @returns inboundDelivery Created
     * @throws ApiError
     */
    public static async postInboundDelivery(
        inboundDeliveryNumber: string,
        requestBody: newInboundDelivery,
        shopCode?: string,
    ): Promise<errorResponse | inboundDelivery> {
        const result = await __request({
            method: 'POST',
            path: `/inbound-delivery/${inboundDeliveryNumber}`,
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
     * Get a list of inbound deliveries.
     * Get a list of inbound deliveries.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param filterStatus Status of the inbound delivery (optional).
     *
     * The status for not yet completed is subject to change. you may poll for changes.
     * - open: The inbound delivery has not yet been delivered.
     * - in_progress: The inbound delivery is being processed in our warehouse.
     * - completed: The inbound delivery has been processed in our warehouse.
     * - deleted: The inbound delivery has been deleted.
     * @param filterShopCode The shopCode used internally to distinguish between clients.<br />
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns inboundDeliveryCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getInboundDeliveryCollection(
        page?: number,
        pageSize?: number,
        filterStatus?: string,
        filterShopCode?: string,
    ): Promise<inboundDeliveryCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/inbound-delivery`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'filter[status]': filterStatus,
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

    /**
     * Cancel a inbound delivery.
     * Cancel a inbound delivery referenced by the given deliveryNumber.
     * @param inboundDeliveryNumber The number the inbound delivery should be refered by.
     * This number is user defined, must be unique and has a maximum length (check maxLength field).
     * @returns inboundDelivery OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async cancelInboundDelivery(
        inboundDeliveryNumber: string,
    ): Promise<inboundDelivery | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/inbound-delivery/${inboundDeliveryNumber}/cancel`,
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