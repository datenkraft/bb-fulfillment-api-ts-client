/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { inboundDelivery } from '../models/inboundDelivery';
import type { newInboundDelivery } from '../models/newInboundDelivery';
import { request as __request } from '../core/request';

export class InboundDeliveryService {

    /**
     * Get an inbound delivery by inbound delivery number.
     * Get an inbound delivery by inbound delivery number.
     * @param inboundDeliveryNumber The inbound delivery number as defined during the creation of the order.
     * @param shopCode The shopCode used in DISCO (optional).
     * @returns inboundDelivery OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getInboundDeliveryInboundDeliveryNumberAppHttpControllersV2InboundDeliveryControllerGetInboundDelivery(
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
     * @param inboundDeliveryNumber The number the inbound delivery should be refered by. This number is user defined, must be unique and has a maximum length (check maxLength field).
     * @param requestBody
     * @param shopCode The shopCode used in DISCO (optional).
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

}