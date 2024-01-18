/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseReconsignmentAnnouncement } from './baseReconsignmentAnnouncement';
import type { reconsignmentAnnouncementLine } from './reconsignmentAnnouncementLine';

/**
 * Data to represent a reconsignment announcement
 */
export type reconsignmentAnnouncement = (baseReconsignmentAnnouncement & {
    /**
     * The number the reconsignmentAnnouncement is referred by.
     */
    reconsignmentAnnouncementNumber?: string,
    /**
     * The date the reconsignmentAnnouncement was created.
     */
    reconsignmentAnnouncementDate?: string,
    /**
     * The country, from where the reconsignment announcement is shipped (ISO 3166-1 alpha-2).
     */
    reconsignmentCountryCode?: string,
    /**
     * The delivery service used for the reconsignmentAnnouncement.
     */
    reconsignmentDeliveryServiceCode?: string,
    /**
     * The tracking code for the reconsignment.
     */
    reconsignmentTrackingCode?: string,
    /**
     * The tracking link for the reconsignment.
     */
    reconsignmentTrackingLink?: string,
    /**
     * Indicates whether the reconsignment announcement is completed.
     */
    reconsignmentAnnouncementCompleted?: boolean,
    /**
     * The order number. Note: This can be null if the order was not created via the API.
     */
    orderNumber?: string,
    /**
     * The delivery number associated with the reconsignment.
     */
    deliveryNumber?: string,
    reconsignmentAnnouncementLines?: Array<reconsignmentAnnouncementLine>,
});
