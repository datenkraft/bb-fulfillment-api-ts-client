/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { newProductDraft } from '../models/newProductDraft';
import type { productDraft } from '../models/productDraft';
import type { productDraftCollection } from '../models/productDraftCollection';
import { request as __request } from '../core/request';

export class ProductDraftService {

    /**
     * Import one or more new product drafts.
     * Import one or more new product draft(s).
     * The file type is controlled by the content type attribute of the uploaded file
     * @param requestBody
     * @returns errorResponse Unexpected Error
     * @returns any Multi Status
     * @throws ApiError
     */
    public static async productDraftBulkImport(
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
        content: (productDraft | errorResponse),
    }>> {
        const result = await __request({
            method: 'POST',
            path: `/bulk-import/product-draft`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server Error`,
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
    public static async getProductDraftBulkImportTemplate(): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/bulk-import/template/product-draft`,
            errors: {
                401: `Unauthorized`,
                406: `The requested document could not be generated in the format specified by the accept header`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * Read a product draft collection.
     * Read a product draft collection. These are read in multiple pages with a defined page size.
     * @param filterShopCode The shopCode used internally to distinguish between clients.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. \
     * This can mean loss of performance.
     * @param filterProductNumber Filter by a productNumber
     * @param filterProductDraftStatus Filter by a product draft status
     * @param filterSearch Search for parts of a productNumber
     * @returns productDraftCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getProductDraftCollection(
        filterShopCode: string,
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        filterProductNumber?: string,
        filterProductDraftStatus?: 'pending' | 'accepted' | 'declined',
        filterSearch?: string,
    ): Promise<productDraftCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/product-draft`,
            query: {
                'filter[shopCode]': filterShopCode,
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'filter[productNumber]': filterProductNumber,
                'filter[productDraftStatus]': filterProductDraftStatus,
                'filter[search]': filterSearch,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * Create a new product draft to initiate the creation new products.
     * Create a new product draft to initiate the creation new products.Product drafts will be put into a queue for manual approval.
     * @param shopCode The shopCode used internally to distinguish between clients.
     * @param requestBody
     * @returns errorResponse Unexpected Error
     * @returns productDraft Created
     * @throws ApiError
     */
    public static async postProductDraft(
        shopCode: string,
        requestBody: newProductDraft,
    ): Promise<errorResponse | productDraft> {
        const result = await __request({
            method: 'POST',
            path: `/product-draft`,
            query: {
                'shopCode': shopCode,
            },
            body: requestBody,
            errors: {
                400: `Bad Request\
                 * Extract of the available message codes:
                 * - PRODUCT_UNIT_NOT_FOUND: Unknown product unit in field contentsUnit.
                 * - TARIC_CODE_NOT_FOUND: Unknown taricCode.
                 * - MANUFACTURER_NOT_FOUND: Unknown manufacturerNumber.
                 * - BRAND_NOT_FOUND: Unknown brandNumber.`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict\
                 * Available message codes:
                 * - PRODUCT_DRAFT_ALREADY_EXISTS: There already exists a pending product draft with the given
                 * productNumber.
                 * - PRODUCT_ALREADY_EXISTS: There already exists a product with the given productNumber.`,
                422: `Unprocessable Entity\
                 * Extract of the available message codes:
                 * - SUPPLIER_NOT_FOUND: Unknown supplierNumber.`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * Read the product draft specified by the given product draft ID.
     * Read the product draft specified by the given product draft ID.
     * @param productDraftId ID of the product draft
     * @param shopCode The shopCode used internally to distinguish between clients.
     * @returns productDraft OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getProductDraft(
        productDraftId: string,
        shopCode: string,
    ): Promise<productDraft | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/product-draft/${productDraftId}`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                422: `Unprocessable Entity`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * Delete a product draft.
     * Delete a product draft.\
     * **The product draft may only be deleted while it is still in pending state.**
     * @param productDraftId ID of the product draft
     * @param shopCode The shopCode used internally to distinguish between clients.
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async deleteProductDraft(
        productDraftId: string,
        shopCode: string,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/product-draft/${productDraftId}`,
            query: {
                'shopCode': shopCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

}