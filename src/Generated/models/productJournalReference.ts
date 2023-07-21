/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type productJournalReference = {
    /**
     * Company name. Set if Journal entry reason is 'niceshops_order' and a company is set.
     */
    companyName?: string;
    /**
     * Inbound delivery number. Set if Journal entry reason is 'inbound'.
     */
    inboundDeliveryNumber?: string;
    /**
     * Order number. Set if Journal entry reason is 'fulfillment' or 'return'.
     */
    orderNumber?: string;
}
