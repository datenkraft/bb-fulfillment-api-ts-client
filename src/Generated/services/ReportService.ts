/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { reportClearingOrderCollection } from '../models/reportClearingOrderCollection';
import { request as __request } from '../core/request';

export class ReportService {

    /**
     * Read the created orders for the given shopCode in the given dateRange.
     * Read the created orders for the given shopCode in the given dateRange.
     * @param filterDateFrom The start date (inclusive) in format Y-m-d for which orders should be returned.
     * @param filterDateTo The end date (inclusive) in format Y-m-d for which orders should be returned.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param filterShopCode The shopCode used in DISCO (optional).
     * @returns reportClearingOrderCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getOrderReportClearingCollection(
        filterDateFrom: string,
        filterDateTo: string,
        page?: number,
        pageSize?: number,
        filterShopCode?: string,
    ): Promise<reportClearingOrderCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/report/clearing/orders`,
            query: {
                'filter[dateFrom]': filterDateFrom,
                'filter[dateTo]': filterDateTo,
                'page': page,
                'pageSize': pageSize,
                'filter[shopCode]': filterShopCode,
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

}