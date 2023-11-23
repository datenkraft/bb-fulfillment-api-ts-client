/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { authRoleCollection } from '../models/authRoleCollection';
import type { authRoleResource } from '../models/authRoleResource';
import type { errorResponse } from '../models/errorResponse';
import type { newAuthRoleResource } from '../models/newAuthRoleResource';
import { request as __request } from '../core/request';

export class AuthRoleService {

    /**
     * Get all available roles from this resource server
     * Get all available roles from this resource server
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @returns authRoleCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getAuthRoleCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
    ): Promise<authRoleCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/auth/role`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
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

    /**
     * Get a role from this resource server by its roleCode
     * Get a role from this resource server by its roleCode
     * @param roleCode Identifier for the role
     * @returns authRoleResource OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getAuthRole(
        roleCode: string,
    ): Promise<authRoleResource | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/auth/role/${roleCode}`,
            errors: {
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
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Post a role for this resource server
     * Post a role for this resource server
     * @param roleCode Identifier for the role
     * @param requestBody
     * @returns authRoleResource OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async postAuthRole(
        roleCode: string,
        requestBody: newAuthRoleResource,
    ): Promise<authRoleResource | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/auth/role/${roleCode}`,
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
                409: `Conflict
                 *
                 * Error codes:
                 * - DATA_ALREADY_EXISTS: A data conflict was detected.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Delete a role for this resource server
     * Delete a role for this resource server
     * @param roleCode Identifier for the role
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteAuthRole(
        roleCode: string,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/auth/role/${roleCode}`,
            errors: {
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
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Patch a role for this resource server
     * Patch a role for this resource server
     * @param roleCode Identifier for the role
     * @param requestBody
     * @returns authRoleResource OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchAuthRole(
        roleCode: string,
        requestBody: newAuthRoleResource,
    ): Promise<authRoleResource | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/auth/role/${roleCode}`,
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
                404: `Not Found
                 *
                 * Error codes:
                 * - DATA_NOT_FOUND: The requested data could not be found.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

}