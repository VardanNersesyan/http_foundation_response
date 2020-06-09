# http-foundation-response

Constants enumerating the HTTP status codes, and HTTP status texts.

Constants enumerating the HTTP status codes. 
All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1), and RFC2518 (WebDAV) are supported.

No dependencies.

## Installation

```console
npm install http-foundation-response --save
```

## Usage

```javascript
var HttpStatus = require('http-foundation-response');
```

## Codes

Constant                       | Code  | Status Text
-------------------------------|-------|-----------------------------------
CONTINUE                       |  100  | Continue
SWITCHING_PROTOCOLS            |  101  | Switching Protocols
PROCESSING                     |  102  | Processing    // RFC2518
EARLY_HINTS                    |  103  | Early Hints
OK                             |  200  | OK
CREATED                        |  201  | Created
ACCEPTED                       |  202  | Accepted
NON_AUTHORITATIVE_INFORMATION  |  203  | Non-Authoritative Information
NO_CONTENT                     |  204  | No Content
RESET_CONTENT                  |  205  | Reset Content
PARTIAL_CONTENT                |  206  | Partial Content
MULTI_STATUS                   |  207  | Multi-Status  // RFC4918
ALREADY_REPORTED               |  208  | Already Reported  // RFC5842
IM_USED                        |  226  | IM Used   // RFC3229
MULTIPLE_CHOICES               |  300  | Multiple Choices
MOVED_PERMANENTLY              |  301  | Moved Permanently
FOUND                          |  302  | Found
SEE_OTHER                      |  303  | See Other
NOT_MODIFIED                   |  304  | Not Modified
USE_PROXY                      |  305  | Use Proxy
RESERVED                       |  306  | (Unused) status code was used in a previous version of the specification, is no longer used, and the code is reserved.
TEMPORARY_REDIRECT             |  307  | Temporary Redirect
PERMANENTLY_REDIRECT           |  308  | Permanent Redirect    // RFC7238
BAD_REQUEST                    |  400  | Bad Request
UNAUTHORIZED                   |  401  | Unauthorized
PAYMENT_REQUIRED               |  402  | Payment Required
FORBIDDEN                      |  403  | Forbidden
NOT_FOUND                      |  404  | Not Found
METHOD_NOT_ALLOWED             |  405  | Method Not Allowed
NOT_ACCEPTABLE                 |  406  | Not Acceptable
PROXY_AUTHENTICATION_REQUIRED  |  407  | Proxy Authentication Required
REQUEST_TIMEOUT                |  408  | Request Timeout
CONFLICT                       |  409  | Conflict
GONE                           |  410  | Gone
LENGTH_REQUIRED                |  411  | Length Required
PRECONDITION_FAILED            |  412  | Precondition Failed
REQUEST_ENTITY_TOO_LARGE       |  413  | Payload Too Large
REQUEST_URI_TOO_LONG           |  414  | URI Too Long
UNSUPPORTED_MEDIA_TYPE         |  415  | Unsupported Media Type
REQUESTED_RANGE_NOT_SATISFIABLE|  416  | Range Not Satisfiabl
EXPECTATION_FAILED             |  417  | Expectation Failed
I_AM_A_TEAPOT                  |  418  | I'm a teapot  // RFC2324
INSUFFICIENT_SPACE_ON_RESOURCE |  419  | Insufficient Space on Resource
METHOD_FAILURE                 |  420  | Method Failure
MISDIRECTED_REQUEST            |  421  | Misdirected Request   // RFC7540
UNPROCESSABLE_ENTITY           |  422  | Unprocessable Entity  // RFC4918
LOCKED                         |  423  | Locked    // RFC4918
FAILED_DEPENDENCY              |  424  | Failed Dependency // RFC4918

## Deprecated codes

Constant                               | Code  | Status Text
---------------------------------------|-------|-----------------------------------
TOO_EARLY                              |  425  | Too Early // RFC-ietf-httpbis-replay-04
UPGRADE_REQUIRED                       |  426  | Upgrade Required  // RFC2817
PRECONDITION_REQUIRED                  |  428  | Precondition Required // RFC6585
TOO_MANY_REQUESTS                      |  429  | Too Many Requests // RFC6585
REQUEST_HEADER_FIELDS_TOO_LARGE        |  431  | Request Header Fields Too Large   // RFC6585
UNAVAILABLE_FOR_LEGAL_REASONS          |  451  | Unavailable For Legal Reasons // RFC7725
INTERNAL_SERVER_ERROR                  |  500  | Internal Server Error
NOT_IMPLEMENTED                        |  501  | Not Implemented
BAD_GATEWAY                            |  502  | Bad Gateway
SERVICE_UNAVAILABLE                    |  503  | Service Unavailable
GATEWAY_TIMEOUT                        |  504  | Gateway Timeout
HTTP_VERSION_NOT_SUPPORTED             |  505  | HTTP Version Not Supported
VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL   |  506  | Variant Also Negotiates
INSUFFICIENT_STORAGE                   |  507  | Insufficient Storage
LOOP_DETECTED                          |  508  | Loop Detected
NOT_EXTENDED                           |  510  | Not Extended
NETWORK_AUTHENTICATION_REQUIRED        |  511  | Network Authentication Required
