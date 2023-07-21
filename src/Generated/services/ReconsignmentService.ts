/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { reconsignment } from '../models/reconsignment';
import type { reconsignmentCollection } from '../models/reconsignmentCollection';
import { request as __request } from '../core/request';

export class ReconsignmentService {

    /**
     * Read the reconsignments in the given dateRange.
     * Read the reconsignments in the given dateRange.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param paginationMode 'default': Total count will not be calculated. 'totalCount': The total number of entries for the request will be calculated. This can mean loss of performance. If not given, 'default' pagination mode is used.
     * @param sortBy Sort the results by one or more comma-separated sort criteria, with the criterion specified first having priority.
     *
     * Available sort orders:
     * - asc: ascending order
     * - desc: descending order
     *
     * Available fields for sorting:
     * - reconsignmentDate
     *
     * The default sort order is reconsignmentDate:desc.
     * @param filterShopCode The shop to which the reconsignments belongs to.
     * @param filterOrderNumber The order number which the reconsignments belong to.
     * @param filterReconsignmentDateFrom filter for reconsignmentDate format in ISO 8601 with UTC offsets
     * @param filterReconsignmentDateTo filter for reconsignmentDate format in ISO 8601 with UTC offsets
     * @returns reconsignmentCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getReconsignmentCollection(
        page?: number,
        pageSize?: number,
        paginationMode?: 'default' | 'totalCount',
        sortBy?: string,
        filterShopCode?: string,
        filterOrderNumber?: string,
        filterReconsignmentDateFrom?: string,
        filterReconsignmentDateTo?: string,
    ): Promise<reconsignmentCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/reconsignment`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'sortBy': sortBy,
                'filter[shopCode]': filterShopCode,
                'filter[orderNumber]': filterOrderNumber,
                'filter[reconsignmentDateFrom]': filterReconsignmentDateFrom,
                'filter[reconsignmentDateTo]': filterReconsignmentDateTo,
            },
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
     * Read the reconsignment specified by the given reconsignment number (set in param reconsignmentNumber).
     * Read the reconsignment specified by the given reconsignment number (set in param reconsignmentNumber).
     * @param reconsignmentNumber
     * @param shopCode
     * @returns reconsignment OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getReconsignment(
        reconsignmentNumber: string,
        shopCode?: string,
    ): Promise<reconsignment | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/reconsignment/${reconsignmentNumber}`,
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

}