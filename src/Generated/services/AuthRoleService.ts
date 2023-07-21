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
     * @returns authRoleCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getAuthRoleCollection(): Promise<authRoleCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/auth/role`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
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
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
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