/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { country } from './country';

/**
 * A collection of countries
 */
export type countryCollection = (collection & {
    data?: Array<country>,
});
