/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { authPermissionRoleCollection } from '../models/authPermissionRoleCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class AuthPermissionRoleService {

    /**
     * Get all role to permission assignments from this resource server
     * Get all role to permission assignments from this resource server
     * @returns authPermissionRoleCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getAuthPermissionRoleCollection(): Promise<authPermissionRoleCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/auth/permission-role`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Create one or more role to permission assignments in this resource server
     * Create one or more role to permission assignments in this resource server
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns authPermissionRoleCollection Created
     * @throws ApiError
     */
    public static async postAuthPermissionRoleCollection(
        requestBody: authPermissionRoleCollection,
    ): Promise<errorResponse | authPermissionRoleCollection> {
        const result = await __request({
            method: 'POST',
            path: `/auth/permission-role`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Delete one or more role to permission assignments in this resource server
     * Delete one or more role to permission assignments in this resource server
     * @param requestBody CAUTION If the request is sent with an empty body, all relations are deleted!
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteAuthPermissionRoleCollection(
        requestBody?: authPermissionRoleCollection,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/auth/permission-role`,
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