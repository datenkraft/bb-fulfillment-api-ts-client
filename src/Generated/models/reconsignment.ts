/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { reconsignmentLine } from './reconsignmentLine';

/**
 * A reconsignment
 */
export type reconsignment = {
    /**
     * The number the reconsignment is referred by.
     */
    reconsignmentNumber?: string;
    /**
     * The date the reconsignment was created.
     */
    reconsignmentDate?: string;
    /**
     * The reason for the reconsignment.
     */
    reconsignmentReason?: reconsignment.reconsignmentReason;
    /**
     * The order number. Note: This can be null if the order was not created via the API.
     */
    orderNumber?: string;
    /**
     * The delivery service used for the creation of the order.
     */
    orderDeliveryServiceCode?: string;
    /**
     * The delivery service used for the reconsignment.
     */
    reconsignmentDeliveryServiceCode?: string;
    /**
     * Indicates whether the reconsignment was pre-announced or not.
     */
    reconsignmentWasPreAnnounced?: boolean;
    /**
     * The country, from where the reconsignment was shipped (ISO 3166-1 alpha-2).
     */
    reconsignmentCountryCode?: string;
    reconsignmentLines?: Array<reconsignmentLine>;
}

export namespace reconsignment {

    /**
     * The reason for the reconsignment.
     */
    export enum reconsignmentReason {
        RECONSIGNMENT_OTHER_DEFAULT = 'reconsignment_other_default',
        RECONSIGNMENT_OTHER_UNKNOWN = 'reconsignment_other_unknown',
        RECONSIGNMENT_PRODUCT_DAMAGE = 'reconsignment_product_damage',
        RECONSIGNMENT_PRODUCT_DEFECT = 'reconsignment_product_defect',
        RECONSIGNMENT_PRODUCT_DISLIKE = 'reconsignment_product_dislike',
        RECONSIGNMENT_PRODUCT_GUARANTEE = 'reconsignment_product_guarantee',
        RECONSIGNMENT_PRODUCT_MISSING = 'reconsignment_product_missing',
        RECONSIGNMENT_PRODUCT_OUTOFDATE = 'reconsignment_product_outofdate',
        RECONSIGNMENT_PRODUCT_WRONG = 'reconsignment_product_wrong',
        RECONSIGNMENT_TRANSPORT_DAMAGE = 'reconsignment_transport_damage',
        RECONSIGNMENT_TRANSPORT_INVALIDADDRESS = 'reconsignment_transport_invalidaddress',
        RECONSIGNMENT_TRANSPORT_LOST = 'reconsignment_transport_lost',
        RECONSIGNMENT_TRANSPORT_NOPICKUP = 'reconsignment_transport_nopickup',
        RECONSIGNMENT_TRANSPORT_REJECTED = 'reconsignment_transport_rejected',
    }


}
