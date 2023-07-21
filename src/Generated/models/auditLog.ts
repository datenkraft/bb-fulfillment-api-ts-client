/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data to represent a audit log entry.
 */
export type auditLog = {
    /**
     * Id
     */
    id?: string;
    /**
     * The name of the audited endpoint.
     */
    endpoint?: string;
    /**
     * The version of the audited endpoint.
     */
    version?: string;
    /**
     * The identifier of the resource.
     */
    identifier?: string;
    /**
     * The content of the resource.
     */
    content?: string | null;
    /**
     * The GDPR relevant content of the resource.
     */
    confidentialContent?: string | null;
    /**
     * The optional request ID of the endpoint call.
     */
    requestId?: string | null;
    /**
     * The OAuth client id which did the change.
     */
    oauthClientId?: string;
    /**
     * The timestamp of the action.
     */
    timestamp?: string;
}
