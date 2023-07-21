/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { auditLog } from './auditLog';
import type { collection } from './collection';

/**
 * A collection of audit log entries
 */
export type auditLogCollection = (collection & {
    data?: Array<auditLog>,
});
