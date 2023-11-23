/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { reconsignment } from './reconsignment';

/**
 * A collection of reconsignments
 */
export type reconsignmentCollection = (collection & {
    data?: Array<reconsignment>,
});
