/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { getAuthPermissionCollectionResponse } from '../models/getAuthPermissionCollectionResponse';
import { request as __request } from '../core/request';

export class AuthPermissionService {

    /**
     * Get all permissions from this resource server
     * Get all permissions from this resource server
     * @returns getAuthPermissionCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getAuthPermissionCollection(): Promise<getAuthPermissionCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/auth/permission`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}