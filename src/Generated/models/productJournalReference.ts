/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type productJournalReference = {
    /**
     * Company name. Is provided if Journal entry reason is 'niceshops_order' and a company is set.
     */
    companyName?: string | null;
    /**
     * Inbound delivery number. Is provided if Journal entry reason is 'inbound'.
     */
    inboundDeliveryNumber?: string | null;
    /**
     * Order number. Is provided if Journal entry reason is 'fulfillment' or 'return'.
     */
    orderNumber?: string | null;
}
