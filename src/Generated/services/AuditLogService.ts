/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { auditLogCollection } from '../models/auditLogCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class AuditLogService {

    /**
     * Get the audit log.
     * Get the audit log.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 100.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated.
     * This can mean loss of performance.
     * @param filterEndpoint A filter for restricting the audit log to a endpoint.
     * @param filterVersion A filter for restricting the audit log to a endpoint version.
     * @param filterIdentifier A filter for querying actions for a identifier.
     * @returns auditLogCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getAuditLogCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        filterEndpoint?: string,
        filterVersion?: string,
        filterIdentifier?: any,
    ): Promise<auditLogCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/audit-log`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'filter[endpoint]': filterEndpoint,
                'filter[version]': filterVersion,
                'filter[identifier]': filterIdentifier,
            },
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
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

}