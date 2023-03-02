/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { shop } from '../models/shop';
import type { shopCollection } from '../models/shopCollection';
import type { updateShop } from '../models/updateShop';
import { request as __request } from '../core/request';

export class ShopService {

    /**
     * Get a list of shops the used identity is assigned to.
     * Get a list of shops the used identity is assigned to.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param filterMetaShopifyShopDomain A filter for the Shopify hostname of the shop.
     * @param filterMetaShopifyDefaultShop A filter for Shopify default shops.\
     * Note: For shops that are part of a Shopify installation that uses multiple shops,
     * only shops where meta.shopifyShopDefault is true will be considered as default shops.\
     * All shops that are used for a single shop Shopify installation will also be considered as default shops.
     * @param filterMetaShopifyOrderCountryCode A filter for the Shopify order country code (ISO 3166-1 alpha-2).
     * @param filterShopCode A filter for one or more shopCode(s) of the shop(s) (optional).
     * @returns shopCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getShopCollection(
        page?: number,
        pageSize?: number,
        filterMetaShopifyShopDomain?: string,
        filterMetaShopifyDefaultShop?: boolean,
        filterMetaShopifyOrderCountryCode?: string,
        filterShopCode?: string,
    ): Promise<shopCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/shop`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'filter[meta][shopifyShopDomain]': filterMetaShopifyShopDomain,
                'filter[meta][shopifyDefaultShop]': filterMetaShopifyDefaultShop,
                'filter[meta][shopifyOrderCountryCode]': filterMetaShopifyOrderCountryCode,
                'filter[shopCode]': filterShopCode,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Update a shop
     * Update one or more fields of a shop. Only a limited set of fields can be updated.
     * @param shopId Shop Id
     * @param requestBody
     * @returns shop OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchShop(
        shopId: string,
        requestBody: updateShop,
    ): Promise<shop | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/shop/${shopId}`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}