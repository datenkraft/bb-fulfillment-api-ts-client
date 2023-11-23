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
     * Import one or more new inbound deliveries.
     * Import one or more new inbound deliveries.
     * The file type is controlled by the content type attribute of the uploaded file
     * @param requestBody
     * @returns errorResponse Unexpected Error
     * @returns any Multi Status
     * @throws ApiError
     */
    public static async inboundDeliveryBulkImport(
        requestBody: any,
    ): Promise<errorResponse | Array<{
        /**
         * HTTP Status code of the single request
         */
        code: number,
        /**
         * Description for the HTTP Status code of the single request
         */
        message: string,
        /**
         * Reference for the entry tried to post represented by a key-value pair.
         */
        reference: Record<string, string>,
        content: (inboundDelivery | errorResponse),
    }>> {
        const result = await __request({
            method: 'POST',
            path: `/bulk-import/inbound-delivery`,
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
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Get a spreadsheet template for performing POST queries to the respective endpoint.
     * Get a spreadsheet template for performing POST queries to the respective endpoint.
     * The file type is controlled by the accept header.
     * The fill-in help in the second line can be removed or remain.
     * @returns any OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getInboundDeliveryBulkImportTemplate(): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/bulk-import/template/inbound-delivery`,
            errors: {
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                406: `The requested document could not be generated in the format specified by the Accept request header.
                 *
                 * Error codes:
                 * - ACCEPTABLE_RESPONSE_NOT_AVAILABLE: No response can be provided for the requested accept header.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Get a list of inbound deliveries.
     * Get a list of inbound deliveries.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @param sortBy Sort the results by one or more comma-separated sort criteria, with the criterion specified first having
     * priority.
     *
     * Available sort orders:
     * - asc: ascending order
     * - desc: descending order
     *
     * Available fields for sorting:
     * - expectedDeliveryDate
     *
     * The default sort order is expectedDeliveryDate:desc.
     * @param filterStatus Status of the inbound delivery (optional).
     *
     * The status for not yet completed is subject to change. you may poll for changes.
     * - open: The inbound delivery has not yet been delivered.
     * - in_progress: The inbound delivery is being processed in our warehouse.
     * - completed: The inbound delivery has been processed in our warehouse.
     * - deleted: The inbound delivery has been deleted.
     * @param filterShopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterExpectedDeliveryDateFrom The start date (inclusive) in format Y-m-d for which inbound deliveries should be returned
     * (regarding the expected delivery date).
     * @param filterExpectedDeliveryDateTo The end date (inclusive) in format Y-m-d for which inbound deliveries should be returned
     * (regarding the expected delivery date).
     * @param filterSearch filter for inbound delivery search.
     *
     * Usage:
     * - Provide one or multiple search terms to filter results.
     * - Multiple search terms are separated by spaces.
     * - The search is not case sensitive.
     * - The search is enabled for the fields inboundDeliveryName and inboundDeliveryNumber (without the
     * numberPrefix of the associated supplier).
     * - Each search term filters the response for inbound deliveries where at least one of the fields contains
     * the search term.
     * - For example, filter[search]='term1 term2' will filter the result for products where 'term1' is found
     * in any field and 'term2' is also found in any field.
     * If only 'term1' or 'term2' is found in the fields, the product is not included in the results.
     * @param filterCreateDateFrom The start date (inclusive) in ISO 8601 format for which inbound deliveries should be returned
     * (regarding the creation date).
     * @param filterCreateDateTo The end date (inclusive) in ISO 8601 format for which inbound deliveries should be returned
     * (regarding the creation date).
     * @returns inboundDeliveryCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getInboundDeliveryCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        sortBy?: string,
        filterStatus?: string,
        filterShopCode?: string,
        filterExpectedDeliveryDateFrom?: string,
        filterExpectedDeliveryDateTo?: string,
        filterSearch?: string,
        filterCreateDateFrom?: string,
        filterCreateDateTo?: string,
    ): Promise<inboundDeliveryCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/inbound-delivery`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'sortBy': sortBy,
                'filter[status]': filterStatus,
                'filter[shopCode]': filterShopCode,
                'filter[expectedDeliveryDateFrom]': filterExpectedDeliveryDateFrom,
                'filter[expectedDeliveryDateTo]': filterExpectedDeliveryDateTo,
                'filter[search]': filterSearch,
                'filter[createDateFrom]': filterCreateDateFrom,
                'filter[createDateTo]': filterCreateDateTo,
            },
            errors: {
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
     * Get an inbound delivery by inbound delivery number.
     * Get an inbound delivery by inbound delivery number.
     * @param inboundDeliveryNumber The inbound delivery number as defined during the creation of the inbound delivery.
     * @param shopCode The shopCode used internally to distinguish between clients. \
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
                 * - AMBIGUOUS_INBOUND_DELIVERY: Multiple inbound deliveries were found.`,
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
     * Add a new inbound delivery.
     * Add a new inbound delivery referenced by the given deliveryNumber.
     * @param inboundDeliveryNumber The number the inbound delivery should be referred by. \
     * This number is user defined, must be unique and has a maximum length (check maxLength field). \
     * Please ensure that it does not contain any of the following character sequences: '/', '%2F', '%2f', '?',
     * '%3F', '%3f', '#', '%23', '&', '%26'. \
     * Using any of these will result in the route not being handled correctly.
     * @param requestBody
     * @param shopCode The shopCode used internally to distinguish between clients. \
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
                 * - SUPPLIER_NOT_FOUND: Unknown supplierNumber.
                 * - PRODUCT_NOT_FOUND: Unknown productNumber.
                 * - DUPLICATED_PRODUCT: There are multiple products with the same productNumber.
                 * - PRODUCT_COULD_NOT_BE_ADDED_FOR_SUPPLIER: At least one of the the given products could not be added for the supplier.
                 * - INBOUND_DELIVERY_NOTIFICATION_NOT_SENDABLE: Could not send the delivery notification to the supplier. The inbound delivery has been deleted.
                 * - INBOUND_DELIVERY_NUMBER_STARTS_WITH_RESERVED_NUMBER_PREFIX: The inboundDeliveryNumber starts with a prefix that is reserved for internal references.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Cancel a inbound delivery.
     * Cancel a inbound delivery referenced by the given inboundDeliveryNumber. \
     * An inboundDeliveryNumber from a canceled inbound delivery cannot be used for a new inbound delivery, because
     * they must always be unique.
     * @param inboundDeliveryNumber The number the inbound delivery should be referred by. \
     * This number is user defined, must be unique and has a maximum length (check maxLength field).
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns inboundDelivery OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async cancelInboundDelivery(
        inboundDeliveryNumber: string,
        shopCode?: string,
    ): Promise<inboundDelivery | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/inbound-delivery/${inboundDeliveryNumber}/cancel`,
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
                409: `Conflict
                 *
                 * Error codes:
                 * - AMBIGUOUS_INBOUND_DELIVERY: Multiple inbound deliveries were found.
                 * - INBOUND_DELIVERY_ALREADY_CANCELED: The inbound delivery is already canceled.
                 * - INBOUND_DELIVERY_NOT_CANCELABLE: The inbound delivery could not be canceled.`,
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
     * Download inbound delivery related documents
     * Allows to download a document associated with the given inbound delivery.
     * @param inboundDeliveryNumber The inbound delivery number as defined during the creation of the inbound delivery.
     * @param documentCode The document type to download. The file format is determined by the Accept request header.
     *
     * Note: only a limited amount of document type to file format combinations are available:
     * - supplierDeliveryLabel: the label to put on the inbound delivery for warehouse processing.
     * Accept header: application/pdf
     * - details: a spreadsheet containing details about the inbound delivery.
     * Accept header: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns any Returns the document with the file format according to the sent Accept request header.
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getInboundDeliveryDocument(
        inboundDeliveryNumber: string,
        documentCode: 'supplierDeliveryLabel' | 'details',
        shopCode?: string,
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/inbound-delivery/${inboundDeliveryNumber}/document/${documentCode}`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
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

}