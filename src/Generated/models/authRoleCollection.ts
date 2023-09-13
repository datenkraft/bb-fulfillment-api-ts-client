/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { authRoleResource } from './authRoleResource';
import type { collection } from './collection';

export type authRoleCollection = (collection & {
    data?: Array<authRoleResource>,
});
