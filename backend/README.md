# How To create Package.json

npm init -y

# install typescript & Configer using tsconfig.json as devDependencies

npm i typescript -D

npx tsc --init

# install Express Server and Create express App

npm i express

# install All the Typescript Package for devDependencies

npm i @types/express -D
npm i ts-node-dev -D

# REST API OR RESTful API

APPLICATION PROGRAMING INTERFACE (API) THAT CONFIRMS TO THE CONSTRAINS OF REST ARCHITECTURAL STYLE.

REST => REPRESENTATIONAL STATE TRANSFER

# Different Methods

GET => RETRIVE INFORMATION ABOUT REST API RESOURSES (READONLY MODE)

POST => CREATE REST API RESOURSE (NEW RESOURSE CREATE AND USE SINGLE TIME)

PUT => UPDATE REST API RESOURES (RESOURSE UPDATE ENTIRLY )

PATCH => UPDATE REST API RESOURSE (RESOURSE UPDATE PARTIAILY)

DELETE => DELETE REST API RESOURSE(RESOURSE DELETE ENTIRLY)

# STATUS CODE

SOURSE: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

1xx: Informational - Request received, continuing process

2xx: Success - The action was successfully received, understood, and accepted

3xx: Redirection - Further action must be taken in order to complete the request

4xx: Client Error - The request contains bad syntax or cannot be fulfilled

5xx: Server Error - The server failed to fulfill an apparently valid request

<table>
<thead>
<tr>
<th>Code</th>
<th>Constant</th>
<th>Reason Phrase</th>
</tr>
</thead>
<tbody>
<tr>
<td>100</td>
<td>CONTINUE</td>
<td>Continue</td>
</tr>
<tr>
<td>101</td>
<td>SWITCHING_PROTOCOLS</td>
<td>Switching Protocols</td>
</tr>
<tr>
<td>102</td>
<td>PROCESSING</td>
<td>Processing</td>
</tr>
<tr>
<td>200 *</td>
<td>OK</td>
<td>OK</td>
</tr>
<tr>
<td>201 *</td>
<td>CREATED</td>
<td>Created</td>
</tr>
<tr>
<td>202 *</td>
<td>ACCEPTED</td>
<td>Accepted</td>
</tr>
<tr>
<td>203 *</td>
<td>NON_AUTHORITATIVE_INFORMATION</td>
<td>Non Authoritative Information</td>
</tr>
<tr>
<td>204 *</td>
<td>NO_CONTENT</td>
<td>No Content</td>
</tr>
<tr>
<td>205</td>
<td>RESET_CONTENT</td>
<td>Reset Content</td>
</tr>
<tr>
<td>206</td>
<td>PARTIAL_CONTENT</td>
<td>Partial Content</td>
</tr>
<tr>
<td>207</td>
<td>MULTI_STATUS</td>
<td>Multi-Status</td>
</tr>
<tr>
<td>300</td>
<td>MULTIPLE_CHOICES</td>
<td>Multiple Choices</td>
</tr>
<tr>
<td>301 *</td>
<td>MOVED_PERMANENTLY</td>
<td>Moved Permanently</td>
</tr>
<tr>
<td>302 *</td>
<td>MOVED_TEMPORARILY</td>
<td>Moved Temporarily</td>
</tr>
<tr>
<td>303</td>
<td>SEE_OTHER</td>
<td>See Other</td>
</tr>
<tr>
<td>304</td>
<td>NOT_MODIFIED</td>
<td>Not Modified</td>
</tr>
<tr>
<td>305</td>
<td>USE_PROXY</td>
<td>Use Proxy</td>
</tr>
<tr>
<td>307 *</td>
<td>TEMPORARY_REDIRECT</td>
<td>Temporary Redirect</td>
</tr>
<tr>
<td>308 *</td>
<td>PERMANENT_REDIRECT</td>
<td>Permanent Redirect</td>
</tr>
<tr>
<td>400 *</td>
<td>BAD_REQUEST</td>
<td>Bad Request</td>
</tr>
<tr>
<td>401 *</td>
<td>UNAUTHORIZED</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>402 *</td>
<td>PAYMENT_REQUIRED</td>
<td>Payment Required</td>
</tr>
<tr>
<td>403 *</td>
<td>FORBIDDEN</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404 *</td>
<td>NOT_FOUND</td>
<td>Not Found</td>
</tr>
<tr>
<td>405 *</td>
<td>METHOD_NOT_ALLOWED</td>
<td>Method Not Allowed</td>
</tr>
<tr>
<td>406 *</td>
<td>NOT_ACCEPTABLE</td>
<td>Not Acceptable</td>
</tr>
<tr>
<td>407</td>
<td>PROXY_AUTHENTICATION_REQUIRED</td>
<td>Proxy Authentication Required</td>
</tr>
<tr>
<td>408 *</td>
<td>REQUEST_TIMEOUT</td>
<td>Request Timeout</td>
</tr>
<tr>
<td>409 *</td>
<td>CONFLICT</td>
<td>Conflict</td>
</tr>
<tr>
<td>410</td>
<td>GONE</td>
<td>Gone</td>
</tr>
<tr>
<td>411</td>
<td>LENGTH_REQUIRED</td>
<td>Length Required</td>
</tr>
<tr>
<td>412</td>
<td>PRECONDITION_FAILED</td>
<td>Precondition Failed</td>
</tr>
<tr>
<td>413 *</td>
<td>REQUEST_TOO_LONG</td>
<td>Request Entity Too Large</td>
</tr>
<tr>
<td>414 *</td>
<td>REQUEST_URI_TOO_LONG</td>
<td>Request-URI Too Long</td>
</tr>
<tr>
<td>415</td>
<td>UNSUPPORTED_MEDIA_TYPE</td>
<td>Unsupported Media Type</td>
</tr>
<tr>
<td>416</td>
<td>REQUESTED_RANGE_NOT_SATISFIABLE</td>
<td>Requested Range Not Satisfiable</td>
</tr>
<tr>
<td>417</td>
<td>EXPECTATION_FAILED</td>
<td>Expectation Failed</td>
</tr>
<tr>
<td>418</td>
<td>IM_A_TEAPOT</td>
<td>I'm a teapot</td>
</tr>
<tr>
<td>419</td>
<td>INSUFFICIENT_SPACE_ON_RESOURCE</td>
<td>Insufficient Space on Resource</td>
</tr>
<tr>
<td>420</td>
<td>METHOD_FAILURE</td>
<td>Method Failure</td>
</tr>
<tr>
<td>421</td>
<td>MISDIRECTED_REQUEST</td>
<td>Misdirected Request</td>
</tr>
<tr>
<td>422</td>
<td>UNPROCESSABLE_ENTITY</td>
<td>Unprocessable Entity</td>
</tr>
<tr>
<td>423</td>
<td>LOCKED</td>
<td>Locked</td>
</tr>
<tr>
<td>424</td>
<td>FAILED_DEPENDENCY</td>
<td>Failed Dependency</td>
</tr>
<tr>
<td>428</td>
<td>PRECONDITION_REQUIRED</td>
<td>Precondition Required</td>
</tr>
<tr>
<td>429</td>
<td>TOO_MANY_REQUESTS</td>
<td>Too Many Requests</td>
</tr>
<tr>
<td>431</td>
<td>REQUEST_HEADER_FIELDS_TOO_LARGE</td>
<td>Request Header Fields Too Large</td>
</tr>
<tr>
<td>451</td>
<td>UNAVAILABLE_FOR_LEGAL_REASONS</td>
<td>Unavailable For Legal Reasons</td>
</tr>
<tr>
<td>500</td>
<td>INTERNAL_SERVER_ERROR</td>
<td>Internal Server Error</td>
</tr>
<tr>
<td>501</td>
<td>NOT_IMPLEMENTED</td>
<td>Not Implemented</td>
</tr>
<tr>
<td>502 *</td>
<td>BAD_GATEWAY</td>
<td>Bad Gateway</td>
</tr>
<tr>
<td>503 *</td>
<td>SERVICE_UNAVAILABLE</td>
<td>Service Unavailable</td>
</tr>
<tr>
<td>504 *</td>
<td>GATEWAY_TIMEOUT</td>
<td>Gateway Timeout</td>
</tr>
<tr>
<td>505</td>
<td>HTTP_VERSION_NOT_SUPPORTED</td>
<td>HTTP Version Not Supported</td>
</tr>
<tr>
<td>507</td>
<td>INSUFFICIENT_STORAGE</td>
<td>Insufficient Storage</td>
</tr>
<tr>
<td>511 *</td>
<td>NETWORK_AUTHENTICATION_REQUIRED</td>
<td>Network Authentication Required</td>
</tr>
</tbody>
</table>
