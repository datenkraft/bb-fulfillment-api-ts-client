/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { productDraft } from './productDraft';

/**
 * A collection of brands
 */
export type productDraftCollection = (collection & {
    /**
     * Data of the collection
     */
    data?: Array<productDraft>,
});
