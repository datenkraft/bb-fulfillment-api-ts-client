/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { reconsignmentAnnouncement } from '../models/reconsignmentAnnouncement';
import type { reconsignmentAnnouncementPaginatedCollection } from '../models/reconsignmentAnnouncementPaginatedCollection';
import { request as __request } from '../core/request';

export class ReconsignmentAnnouncementService {

    /**
     * Get reconsignment announcements.
     * Get reconsignment announcements.
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
     * - reconsignmentAnnouncementDate
     *
     * The default sort order is reconsignmentAnnouncementDate:desc.
     * @param filterShopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterOrderNumber Filter for a single order number.
     * @param filterReconsignmentAnnouncementCompleted Filter for completed or not completed reconsignment announcements.
     * @param filterReconsignmentAnnouncementDateFrom Filter for reconsignmentAnnouncementDate (from)
     * @param filterReconsignmentAnnouncementDateTo Filter for reconsignmentAnnouncementDate (to)
     * @param filterSearch Filter for reconsignment announcement search.
     *
     * Usage:
     * - Provide one or multiple search terms (min. 2 characters) to filter results.
     * - Multiple search terms are separated by spaces.
     * - The search is not case sensitive.
     * - The search is enabled for the fields reconsignmentAnnouncementNumber, orderNumber,
     * externalOrderReference and reconsignmentTrackingCode.
     * - Each search term filters the response for reconsignment announcements where at least one of the fields
     * contains the search term.
     * - For example, filter[search]='term1 term2' will filter the result for reconsignment announcements where
     * 'term1' is found in any field and 'term2' is also found in any field.\
     * If only 'term1' or 'term2' is found in the fields, the reconsignment announcement is not included in the
     * results.
     * @returns reconsignmentAnnouncementPaginatedCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getReconsignmentAnnouncementCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        sortBy?: string,
        filterShopCode?: string,
        filterOrderNumber?: string,
        filterReconsignmentAnnouncementCompleted?: boolean,
        filterReconsignmentAnnouncementDateFrom?: string,
        filterReconsignmentAnnouncementDateTo?: string,
        filterSearch?: string,
    ): Promise<reconsignmentAnnouncementPaginatedCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/reconsignment-announcement`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'sortBy': sortBy,
                'filter[shopCode]': filterShopCode,
                'filter[orderNumber]': filterOrderNumber,
                'filter[reconsignmentAnnouncementCompleted]': filterReconsignmentAnnouncementCompleted,
                'filter[reconsignmentAnnouncementDateFrom]': filterReconsignmentAnnouncementDateFrom,
                'filter[reconsignmentAnnouncementDateTo]': filterReconsignmentAnnouncementDateTo,
                'filter[search]': filterSearch,
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
     * Get the reconsignment announcement with the given reconsignmentAnnouncementNumber.
     * Get the reconsignment announcement with the given reconsignmentAnnouncementNumber.
     * @param reconsignmentAnnouncementNumber Number of the reconsignment announcement
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns reconsignmentAnnouncement OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getReconsignmentAnnouncement(
        reconsignmentAnnouncementNumber: string,
        shopCode?: string,
    ): Promise<reconsignmentAnnouncement | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/reconsignment-announcement/${reconsignmentAnnouncementNumber}`,
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
     * Download reconsignmentAnnouncement related documents.
     * Allows to download a document associated with the given reconsignmentAnnouncement.
     * @param reconsignmentAnnouncementNumber The number of the reconsignmentAnnouncement.
     * @param documentCode The document type to download. The file format is determined by the Accept request header.\
     * **Note:** Only a limited amount of document type to file format combinations are available:
     * - shippingLabel: The shipping label for the end customer to ship goods back to the steve warehouse.\
     * Accept header: application/pdf
     * @param shopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns any Returns the document with the file format according to the sent Accept request header.
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getReconsignmentAnnouncementDocument(
        reconsignmentAnnouncementNumber: string,
        documentCode: 'shippingLabel',
        shopCode?: string,
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/reconsignment-announcement/${reconsignmentAnnouncementNumber}/document/${documentCode}`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.
                 * - RECONSIGNMENT_ANNOUNCEMENT_ALREADY_COMPLETED: The document can not be downloaded anymore, because the reconsignment announcement has already been completed.`,
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

}