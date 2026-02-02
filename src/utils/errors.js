const { ERROR_CODES } = require('./constants');

class NeokexError extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = 'NeokexError';
    this.code = code;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

class LoginError extends NeokexError {
  constructor(message, details = {}) {
    super(message, ERROR_CODES.LOGIN_FAILED, details);
    this.name = 'LoginError';
  }
}

class CheckpointError extends NeokexError {
  constructor(message, details = {}) {
    super(message, ERROR_CODES.CHECKPOINT_REQUIRED, details);
    this.name = 'CheckpointError';
  }
}

class AccountLockedError extends NeokexError {
  constructor(message, details = {}) {
    super(message, ERROR_CODES.ACCOUNT_LOCKED, details);
    this.name = 'AccountLockedError';
  }
}

class AccountSuspendedError extends NeokexError {
  constructor(message, details = {}) {
    super(message, ERROR_CODES.ACCOUNT_SUSPENDED, details);
    this.name = 'AccountSuspendedError';
  }
}

class SessionExpiredError extends NeokexError {
  constructor(message, details = {}) {
    super(message, ERROR_CODES.SESSION_EXPIRED, details);
    this.name = 'SessionExpiredError';
  }
}

class RateLimitError extends NeokexError {
  constructor(message, details = {}) {
    super(message, ERROR_CODES.RATE_LIMIT, details);
    this.name = 'RateLimitError';
  }
}

module.exports = {
  NeokexError,
  LoginError,
  CheckpointError,
  AccountLockedError,
  AccountSuspendedError,
  SessionExpiredError,
  RateLimitError
};
