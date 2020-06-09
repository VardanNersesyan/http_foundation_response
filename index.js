var httpCodes = {};

httpCodes[exports.CONTINUE = 100] = "Continue";
httpCodes[exports.SWITCHING_PROTOCOLS = 101] = "Switching Protocols";
httpCodes[exports.PROCESSING = 102] = "Processing";
httpCodes[exports.EARLY_HINTS = 103] = "Early Hints";
httpCodes[exports.OK = 200] = "OK";
httpCodes[exports.CREATED = 201] = "Created";
httpCodes[exports.ACCEPTED = 202] = "Accepted";
httpCodes[exports.NON_AUTHORITATIVE_INFORMATION = 203] = "Non Authoritative Information";
httpCodes[exports.NO_CONTENT = 204] = "No Content";
httpCodes[exports.RESET_CONTENT = 205] = "Reset Content";
httpCodes[exports.PARTIAL_CONTENT = 206] = "Partial Content";
httpCodes[exports.MULTI_STATUS = 207] = "Multi-Status";
httpCodes[exports.ALREADY_REPORTED = 208] = "Already Reported";
httpCodes[exports.IM_USED = 226] = "IM Used";
httpCodes[exports.MULTIPLE_CHOICES = 300] = "Multiple Choices";
httpCodes[exports.MOVED_PERMANENTLY = 301] = "Moved Permanently";
httpCodes[exports.FOUND = 302] = "Found";
httpCodes[exports.SEE_OTHER = 303] = "See Other";
httpCodes[exports.NOT_MODIFIED = 304] = "Not Modified";
httpCodes[exports.USE_PROXY = 305] = "Use Proxy";
httpCodes[exports.RESERVED = 306] = "(Unused)";
httpCodes[exports.TEMPORARY_REDIRECT = 307] = "Temporary Redirect";
httpCodes[exports.PERMANENT_REDIRECT = 308] = "Permanent Redirect";
httpCodes[exports.BAD_REQUEST = 400] = "Bad Request";
httpCodes[exports.UNAUTHORIZED = 401] = "Unauthorized";
httpCodes[exports.PAYMENT_REQUIRED = 402] = "Payment Required";
httpCodes[exports.FORBIDDEN = 403] = "Forbidden";
httpCodes[exports.NOT_FOUND = 404] = "Not Found";
httpCodes[exports.METHOD_NOT_ALLOWED = 405] = "Method Not Allowed";
httpCodes[exports.NOT_ACCEPTABLE = 406] = "Not Acceptable";
httpCodes[exports.PROXY_AUTHENTICATION_REQUIRED = 407] = "Proxy Authentication Required";
httpCodes[exports.REQUEST_TIMEOUT = 408] = "Request Timeout";
httpCodes[exports.CONFLICT = 409] = "Conflict";
httpCodes[exports.GONE = 410] = "Gone";
httpCodes[exports.LENGTH_REQUIRED = 411] = "Length Required";
httpCodes[exports.PRECONDITION_FAILED = 412] = "Precondition Failed";
httpCodes[exports.REQUEST_ENTITY_TOO_LARGE = 413] = "Payload Too Large";
httpCodes[exports.REQUEST_URI_TOO_LONG = 414] = "Request-URI Too Long";
httpCodes[exports.UNSUPPORTED_MEDIA_TYPE = 415] = "Unsupported Media Type";
httpCodes[exports.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "Requested Range Not Satisfiable";
httpCodes[exports.EXPECTATION_FAILED = 417] = "Expectation Failed";
httpCodes[exports.IM_A_TEAPOT = 418] = "I'm a teapot";
httpCodes[exports.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "Insufficient Space on Resource";
httpCodes[exports.METHOD_FAILURE = 420] = "Method Failure";
httpCodes[exports.MISDIRECTED_REQUEST = 421] = "Misdirected Request";
httpCodes[exports.UNPROCESSABLE_ENTITY = 422] = "Unprocessable Entity";
httpCodes[exports.LOCKED = 423] = "Locked";
httpCodes[exports.FAILED_DEPENDENCY  = 424] = "Failed Dependency";
httpCodes[exports.TOO_EARLY  = 425] = "Too Early";
httpCodes[exports.UPGRADE_REQUIRED  = 426] = "Upgrade Required";
httpCodes[exports.PRECONDITION_REQUIRED = 428] = "Precondition Required";
httpCodes[exports.TOO_MANY_REQUESTS = 429] = "Too Many Requests";
httpCodes[exports.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "Request Header Fields Too Large";
httpCodes[exports.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "Unavailable For Legal Reasons";
httpCodes[exports.INTERNAL_SERVER_ERROR = 500] = "Internal Server Error";
httpCodes[exports.NOT_IMPLEMENTED = 501] = "Not Implemented";
httpCodes[exports.BAD_GATEWAY = 502] = "Bad Gateway";
httpCodes[exports.SERVICE_UNAVAILABLE = 503] = "Service Unavailable";
httpCodes[exports.GATEWAY_TIMEOUT = 504] = "Gateway Timeout";
httpCodes[exports.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP Version Not Supported";
httpCodes[exports.VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL = 506] = "Variant Also Negotiates";
httpCodes[exports.INSUFFICIENT_STORAGE = 507] = "Insufficient Storage";
httpCodes[exports.LOOP_DETECTED = 508] = "Loop Detected";
httpCodes[exports.NOT_EXTENDED = 510] = "Not Extended";
httpCodes[exports.NETWORK_AUTHENTICATION_REQUIRED = 511] = "Network Authentication Required";

exports.getStatusText = function(httpCode) {
    if (httpCodes.hasOwnProperty(httpCode)) {
        return httpCodes[httpCode];
    } else {
        throw new Error("Http status code does not exist: " + httpCode);
    }
};

exports.getStatusCode = function(reasonPhrase) {
    for (key in httpCodes) {
        if (httpCodes[key] === reasonPhrase) {
            return parseInt(key, 10);
        }
    }
    throw new Error("Reason phrase does not exist: " + reasonPhrase);
};