/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { authRoleIdentityCollection } from '../models/authRoleIdentityCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class AuthRoleIdentityService {

    /**
     * Get all role to identity assignments from this resource server
     * Get all role to identity assignments from this resource server
     * @returns authRoleIdentityCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getAuthRoleIdentityCollection(): Promise<authRoleIdentityCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/auth/role-identity`,
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
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteAuthRoleIdentityCollection(): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/auth/role-identity`,
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