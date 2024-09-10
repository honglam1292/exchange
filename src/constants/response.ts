export const ResponseCode = {
    SUCCESS: 0,
    NO_RECEIVE_DATA: 80,
    USER_NAME_ERROR: 108,
    PASSWORD_ERROR: 83,
    USER_NAME_NOT_FOUND: 120,
    INVALID_LOGIN: 123,
    ACCOUNT_SUSPENDED: [86, 124],
    CONFIRM_PASSWORD_ERROR: 87,
    EMAIL_ERROR: 116,
    MOBILE_ERROR: 115,
    FULL_NAME_ERROR: 90,
    UPLINE_NOT_FOUND: 91,
    REFERRER_NOT_FOUND: 91,
    INVALID_USER_FREFIX_USERNAME: 92,
    FINGERPRINT_ERROR: 93,
    USER_REGISTRATION_FAILED: 94,
    RESET_FAILED: [95, 96],
    SYSTEM_MAINTENANCE: 100,
    INVALID_METHOD: 102,
    INVALID_AGENT_ID: 103,
    AGENT_ID_NOT_FOUND: 104,
    INVALID_SIGNATURE: [105, 106],
    ACCESS_DENIED: 125,
    INVALID_TOKEN: 128,
    INVALID_PARAMETER: 129,
    INVALID_PROVIDER: [97, 131],
    SYSTEM_ERROR: [98, 200],
  } as const;

  export const ResponseText = {
    SUCCESS: "Success",
    NO_RECEIVE_DATA: "No Receive Data",
    USER_NAME_ERROR: "Username Error",
    PASSWORD_ERROR: "Password Error",
    USER_NAME_NOT_FOUND: "Username Not Found",
    INVALID_LOGIN: "Invalid Login",
    ACCOUNT_SUSPENDED: "Account Suspended",
    CONFIRM_PASSWORD_ERROR: "Confirm Password Error",
    EMAIL_ERROR: "Email Error",
    MOBILE_ERROR: "Mobile Error",
    FULL_NAME_ERROR: "Full Name Error",
    UPLINE_NOT_FOUND: "Upline not found",
    REFERRER_NOT_FOUND: "Referrer not found",
    INVALID_USER_FREFIX_USERNAME: "Invalid User Prefix in Username",
    FINGERPRINT_ERROR: "Fingerprint Error",
    USER_REGISTRATION_FAILED: "User Registration Falied",
    RESET_FAILED: "Reset Falied",
    SYSTEM_MAINTENANCE: "System Maintenance",
    INVALID_METHOD: "Invalid Method",
    INVALID_AGENT_ID: "Invalid Agent Id",
    AGENT_ID_NOT_FOUND: "Agent Id Not Found",
    INVALID_SIGNATURE: "Invalid Signature",
    ACCESS_DENIED: "Access Denied",
    INVALID_TOKEN: "Invalid Token",
    INVALID_PARAMETER: "Invalid Parameter",
    INVALID_PROVIDER: "Invalid Provider",
    SYSTEM_ERROR: "System Error",
    UPLOAD_SUCCESS: "Uploaded Successfully",
  } as const;