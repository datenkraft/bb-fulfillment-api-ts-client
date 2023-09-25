/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { authRoleIdentityCollection } from '../models/authRoleIdentityCollection';
import type { authRoleIdentityPaginatedCollection } from '../models/authRoleIdentityPaginatedCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class AuthRoleIdentityService {

    /**
     * Get all role to identity assignments from this resource server
     * Get all role to identity assignments from this resource server
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. This can mean loss of performance.
     * @returns authRoleIdentityPaginatedCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getAuthRoleIdentityCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
    ): Promise<authRoleIdentityPaginatedCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/auth/role-identity`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
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
     * Create one or more role to identity assignments in this resource server
     * Create one or more role to identity assignments in this resource server
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns authRoleIdentityCollection Created
     * @throws ApiError
     */
    public static async postAuthRoleIdentityCollection(
        requestBody: authRoleIdentityCollection,
    ): Promise<errorResponse | authRoleIdentityCollection> {
        const result = await __request({
            method: 'POST',
            path: `/auth/role-identity`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Delete one or more role to identity assignments in this resource server
     * Delete one or more role to identity assignments in this resource server
     * @param requestBody CAUTION If the request is sent with an empty body, all relations are deleted!
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteAuthRoleIdentityCollection(
        requestBody?: authRoleIdentityCollection,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/auth/role-identity`,
            body: requestBody,
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