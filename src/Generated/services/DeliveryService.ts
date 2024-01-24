/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { delivery } from '../models/delivery';
import type { deliveryCollection } from '../models/deliveryCollection';
import type { deliveryServiceCollection } from '../models/deliveryServiceCollection';
import type { deliveryShipment } from '../models/deliveryShipment';
import type { errorResponse } from '../models/errorResponse';
import type { updateDeliveryShipment } from '../models/updateDeliveryShipment';
import { request as __request } from '../core/request';

export class DeliveryService {

    /**
     * Get delivery services.
     * Get delivery services.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @returns deliveryServiceCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDeliveryServiceCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
    ): Promise<deliveryServiceCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/delivery-service`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
            },
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Get deliveries filtered by a single or multiple order numbers.
     * Get deliveries filtered by a single or multiple order numbers.
     * @param filterOrderNumber A filter for a single order number or multiple order numbers separated by a comma.
     * - The filter can contain a maximum of 100 order numbers.
     * - The order numbers in the filter must be unique.
     * - A single order number can have a maximum length of 59 characters.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns deliveryCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getDeliveryCollection(
        filterOrderNumber: string,
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        shopCode?: string,
    ): Promise<deliveryCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/delivery`,
            query: {
                'filter[orderNumber]': filterOrderNumber,
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'shopCode': shopCode,
            },
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - SHOP_NOT_FOUND: Shop not found.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Get the delivery with the given deliveryNumber.
     * Get the delivery with the given deliveryNumber.
     * @param deliveryNumber Number of the delivery
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns delivery OK
     * @returns errorResponse Unexpected Error
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
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                404: `Not Found
                 *
                 * Error codes:
                 * - DATA_NOT_FOUND: The requested data could not be found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - SHOP_NOT_FOUND: Shop not found.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Download delivery related documents
     * Allows to download a document associated with the given delivery.
     * @param deliveryNumber The number of the delivery
     * @param documentCode The document type to download. The file format is determined by the Accept request header.\
     * **Note:** Only a limited amount of document type to file format combinations are available:
     * - deliverySlipNote: The delivery slip note to confirm successful delivery.\
     * Accept header: application/pdf
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns any Returns the document with the file format according to the sent Accept request header.
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getDeliveryDocument(
        deliveryNumber: string,
        documentCode: 'deliverySlipNote',
        shopCode?: string,
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/delivery/${deliveryNumber}/document/${documentCode}`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                404: `Not Found
                 *
                 * Error codes:
                 * - DATA_NOT_FOUND: The requested data could not be found.`,
                406: `The requested document could not be generated in the format specified by the Accept request header.
                 *
                 * Error codes:
                 * - ACCEPTABLE_RESPONSE_NOT_AVAILABLE: No response can be provided for the requested accept header.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - SHOP_NOT_FOUND: Shop not found.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Patch data of the shipment of the delivery specified by the given delivery and shipment numbers.
     * Patch data of the shipment of the delivery specified by the given delivery and shipment numbers.
     * @param deliveryNumber Number of the delivery.
     * @param shipmentNumber Number of the shipment.
     * @param requestBody
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns deliveryShipment OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async patchDeliveryShipment(
        deliveryNumber: string,
        shipmentNumber: string,
        requestBody: updateDeliveryShipment,
        shopCode?: string,
    ): Promise<deliveryShipment | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/delivery/${deliveryNumber}/shipment/${shipmentNumber}`,
            query: {
                'shopCode': shopCode,
            },
            body: requestBody,
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                404: `Not Found
                 *
                 * Error codes:
                 * - DATA_NOT_FOUND: The requested data could not be found.`,
                409: `Conflict
                 *
                 * Error codes:
                 * - SHIPMENT_WITH_STEVE_EXTERNAL_SHIPMENT_ID_ALREADY_EXISTS: Another shipment with the given shipmentId already exists.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - SHOP_NOT_FOUND: Shop not found.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

}