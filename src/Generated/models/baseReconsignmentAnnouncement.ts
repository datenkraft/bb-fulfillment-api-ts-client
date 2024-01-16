/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base data for a reconsignment announcement
 */
export type baseReconsignmentAnnouncement = {
    /**
     * The reason for reconsignment.
     */
    reconsignmentReason?: baseReconsignmentAnnouncement.reconsignmentReason;
}

export namespace baseReconsignmentAnnouncement {

    /**
     * The reason for reconsignment.
     */
    export enum reconsignmentReason {
        RECONSIGNMENT_TRANSPORT_LOST = 'reconsignment_transport_lost',
        RECONSIGNMENT_TRANSPORT_DAMAGE = 'reconsignment_transport_damage',
        RECONSIGNMENT_PRODUCT_WRONG = 'reconsignment_product_wrong',
        RECONSIGNMENT_PRODUCT_OUTOFDATE = 'reconsignment_product_outofdate',
        RECONSIGNMENT_PRODUCT_MISSING = 'reconsignment_product_missing',
        RECONSIGNMENT_PRODUCT_GUARANTEE = 'reconsignment_product_guarantee',
        RECONSIGNMENT_PRODUCT_DISLIKE = 'reconsignment_product_dislike',
        RECONSIGNMENT_PRODUCT_DEFECT = 'reconsignment_product_defect',
        RECONSIGNMENT_PRODUCT_DAMAGE = 'reconsignment_product_damage',
        RECONSIGNMENT_OTHER_UNKNOWN = 'reconsignment_other_unknown',
    }


}
