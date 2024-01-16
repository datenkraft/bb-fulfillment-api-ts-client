/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseReconsignmentAnnouncement } from './baseReconsignmentAnnouncement';
import type { newReconsignmentAnnouncementLine } from './newReconsignmentAnnouncementLine';

/**
 * Data to represent a new reconsignment announcement
 */
export type newReconsignmentAnnouncement = (baseReconsignmentAnnouncement & {
    reconsignmentAnnouncementLines?: Array<newReconsignmentAnnouncementLine>,
});
