/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProductDraft } from './baseProductDraft';

/**
 * Data to represent a product draft
 */
export type productDraft = (baseProductDraft & {
    /**
     * The shop to which the product belongs
     */
    shopCode?: string,
    /**
     * The source of the product draft
     */
    source?: productDraft.source,
    productDraftId?: string,
    /**
     * Status of the product draft.\
     * Available values:
     * - pending: The product draft is subject to be checked by the steve team
     * - accepted: The product draft is accepted and the product can be used in the /product endpoints
     * - declined: The product draft is declined by the steve team
     */
    productDraftStatus?: productDraft.productDraftStatus,
    /**
     * Unit of the product contents.\
     * All units can be queried with a GET /product-unit call
     */
    contentsUnit?: string,
});

export namespace productDraft {

    /**
     * The source of the product draft
     */
    export enum source {
        API = 'api',
    }

    /**
     * Status of the product draft.\
     * Available values:
     * - pending: The product draft is subject to be checked by the steve team
     * - accepted: The product draft is accepted and the product can be used in the /product endpoints
     * - declined: The product draft is declined by the steve team
     */
    export enum productDraftStatus {
        PENDING = 'pending',
        ACCEPTED = 'accepted',
        DECLINED = 'declined',
    }


}
