/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { authPermissionRoleResource } from './authPermissionRoleResource';
import type { collection } from './collection';

export type authPermissionRolePaginatedCollection = (collection & {
    data?: Array<authPermissionRoleResource>,
});
