/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productJournalReference } from './productJournalReference';

export type productJournal = {
    /**
     * The API internal id of the journal entry.
     */
    journalId?: number;
    /**
     * The date and time at which the journal entry was created. Format in ISO 8601.
     */
    date?: string;
    /**
     * The number of the product which the journal entry refers to.
     */
    productNumber?: string;
    /**
     * The code that defines the reason for the stock change.
     */
    reason?: productJournal.reason;
    /**
     * The change of the stock.\
     * Note: This might not be set for all reasons.
     */
    stockDelta?: number | null;
    /**
     * The old value of the stock before applying the delta.\
     * Note: This might not be set for all reasons.
     */
    stockOld?: number | null;
    /**
     * The new value of the stock when the journal entry was created.\
     * Note: This might not be set for all reasons.
     */
    stockNew?: number | null;
    reference?: productJournalReference;
}

export namespace productJournal {

    /**
     * The code that defines the reason for the stock change.
     */
    export enum reason {
        EXPIRED = 'expired',
        DAMAGED = 'damaged',
        OWN_WITHDRAWAL = 'own_withdrawal',
        CORRECTION = 'correction',
        NICESHOPS_ORDER = 'niceshops_order',
        INBOUND = 'inbound',
        FULFILLMENT = 'fulfillment',
        RETURN = 'return',
    }


}
