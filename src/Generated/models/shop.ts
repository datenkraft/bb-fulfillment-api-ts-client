/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data to represent a shop
 */
export type shop = {
    /**
     * Id
     */
    id?: string;
    /**
     * The shopCode used internally to distinguish between clients
     */
    shopCode?: string;
    /**
     * The prefix to the references internally to distinguish between clients.
     */
    internalReferencePrefix?: string;
    /**
     * The email used internally.
     */
    email?: string;
    /**
     * The id of the project to which the shop belongs.
     */
    projectId?: string;
    /**
     * Meta data of the shop.
     */
    meta?: Record<string, any> | null;
}
