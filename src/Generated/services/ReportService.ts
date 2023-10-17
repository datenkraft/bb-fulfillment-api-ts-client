/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { reportClearingOrderCollection } from '../models/reportClearingOrderCollection';
import type { reportInventoryMovementEntryCollection } from '../models/reportInventoryMovementEntryCollection';
import { request as __request } from '../core/request';

export class ReportService {

    /**
     * Read the created orders for the given shopCode in the given dateRange.
     * Read the created orders for the given shopCode in the given dateRange.
     * @param filterDateFrom The start date (inclusive) in format Y-m-d (timezone CET/CEST) for which orders should be returned.
     * @param filterDateTo The end date (inclusive) in format Y-m-d (timezone CET/CEST) for which orders should be returned.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. \
     * This can mean loss of performance.
     * @param filterShopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @returns reportClearingOrderCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getOrderReportClearingCollection(
        filterDateFrom: string,
        filterDateTo: string,
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
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
                'paginationMode': paginationMode,
                'filter[shopCode]': filterShopCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                422: `Unprocessable Entity`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * Read the inventory movements for the given shopCode in the given month and year.
     * Read the inventory movements for the given shopCode in the given month and year.
     * _Only inventory movements for products with source 'self' are returned._
     * @param filterYear The year for which inventory movements should be returned.
     * @param filterMonth The month for which inventory movements should be returned.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. \
     * This can mean loss of performance.
     * @param filterShopCode The shopCode used internally to distinguish between clients. \
     * _This code is optional, if your identity is assigned to only one shop.
     * Otherwise the response would be a 422 HTTP Error._
     * @param filterProductNumbers The productNumber(s) as comma delimited string for which inventory movements should be returned (optional).
     * @returns reportInventoryMovementEntryCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getReportInventoryMovementCollection(
        filterYear: number,
        filterMonth: number,
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        filterShopCode?: string,
        filterProductNumbers?: string,
    ): Promise<reportInventoryMovementEntryCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/report/inventory-movements`,
            query: {
                'filter[year]': filterYear,
                'filter[month]': filterMonth,
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'filter[shopCode]': filterShopCode,
                'filter[productNumbers]': filterProductNumbers,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                422: `Unprocessable Entity`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

}