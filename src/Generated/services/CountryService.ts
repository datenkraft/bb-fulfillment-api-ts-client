/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { countryCollection } from '../models/countryCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class CountryService {

    /**
     * Read a country collection of all countries available for shipments.
     * Collections are read in multiple pages with a defined page size.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @returns countryCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getCountryCollection(
        page?: number,
        pageSize?: number,
    ): Promise<countryCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/country`,
            query: {
                'page': page,
                'pageSize': pageSize,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}