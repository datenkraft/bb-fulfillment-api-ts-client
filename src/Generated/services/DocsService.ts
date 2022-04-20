/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class DocsService {

    /**
     * Get the openapi documentation as json
     * Get the openapi documentation as json
     * @returns any OK
     * @throws ApiError
     */
    public static async getOpenApi(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/docs`,
        });
        return result.body;
    }

    /**
     * Get the openapi documentation in the specified format (yaml or json, fallback is json)
     * Get the openapi documentation in the specified format (yaml or json, fallback is json)
     * @param format Openapi file format
     * @returns any OK
     * @throws ApiError
     */
    public static async getOpenApiInFormat(
        format: 'yaml' | 'json',
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/docs/openapi.${format}`,
        });
        return result.body;
    }

}