/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type collectionPagination = {
    /**
     * The page contained in this collection.
     */
    page?: number;
    /**
     * The page size used for reading the collection.
     */
    pageSize?: number;
    /**
     * The total number of items in the collection.\
     * Note: This can be null depending on the used paginationMode.
     */
    totalCount?: number | null;
}
