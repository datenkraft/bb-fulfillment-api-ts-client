/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { shopCollection } from '../models/shopCollection';
import { request as __request } from '../core/request';

export class ShopService {

    /**
     * Get a list of shops.
     * Get a list of shops.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @param filterMetaShopifyShopDomain A filter for the Shopify hostname of the shop.
     * @returns shopCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getShopCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        filterMetaShopifyShopDomain?: string,
    ): Promise<shopCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/shop`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'filter[meta][shopifyShopDomain]': filterMetaShopifyShopDomain,
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
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

}