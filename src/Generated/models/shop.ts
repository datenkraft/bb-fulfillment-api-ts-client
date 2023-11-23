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
     * The shopCode used in DISCO.
     */
    discoShopCode?: string;
    /**
     * The prefix to the order reference in DISCO.
     */
    discoOrderReferencePrefix?: string;
    /**
     * The email used in DISCO.
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
