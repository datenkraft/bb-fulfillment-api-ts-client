/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { reconsignmentAnnouncement } from './reconsignmentAnnouncement';

/**
 * A collection of reconsignment announcements
 */
export type reconsignmentAnnouncementPaginatedCollection = (collection & {
    data?: Array<reconsignmentAnnouncement>,
});
