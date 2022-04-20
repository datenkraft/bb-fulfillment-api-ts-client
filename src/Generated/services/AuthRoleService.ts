/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { authRoleCollection } from '../models/authRoleCollection';
import type { errorResponse } from '../models/errorResponse';
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

}