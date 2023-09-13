/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { authPermissionResource } from './authPermissionResource';
import type { collection } from './collection';

export type getAuthPermissionCollectionResponse = (collection & {
    data?: Array<authPermissionResource>,
});
