/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { reconsignmentAnnouncementLine } from './reconsignmentAnnouncementLine';

/**
 * A collection of reconsignment announcement lines
 */
export type reconsignmentAnnouncementLineCollection = (collection & {
    data?: Array<reconsignmentAnnouncementLine>,
});
