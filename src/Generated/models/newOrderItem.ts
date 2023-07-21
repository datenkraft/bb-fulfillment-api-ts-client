/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newOrderItemPrice } from './newOrderItemPrice';
import type { orderItem } from './orderItem';

export type newOrderItem = (orderItem & newOrderItemPrice);
