/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type error = {
    /**
     * Code
     */
    code: string;
    /**
     * Message
     */
    message: string;
    /**
     * References
     */
    references?: Array<{
        /**
         * The reference to the field causing the error
         */
        key?: string,
        /**
         * The value of the field causing the error
         */
        value?: any,
    }>;
}
