/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { authRoleIdentityResource } from './authRoleIdentityResource';
import type { collection } from './collection';

export type authRoleIdentityPaginatedCollection = (collection & {
    data?: Array<authRoleIdentityResource>,
});
