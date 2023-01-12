/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { productJournal } from './productJournal';

/**
 * A collection of product journals
 */
export type productJournalCollection = (collection & {
    data?: Array<productJournal>,
});
