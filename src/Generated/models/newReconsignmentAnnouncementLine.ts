/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data to represent a single piece of content in a new reconsignment announcement
 */
export type newReconsignmentAnnouncementLine = {
    productNumber: string;
    /**
     * Number of items included in the reconsignment announcement.
     */
    count: number;
}
