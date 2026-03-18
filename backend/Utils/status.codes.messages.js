const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
};

const MESSAGES = {

  SUCCESS: "Operation successful",


  REGISTRATION_SUCCESS: "User registered successfully",
  LOGIN_SUCCESS: "Login successful",
  INVALID_CREDENTIALS: "Invalid email or password",
  EMAIL_ALREADY_EXISTS: "Email already exists",


  INTERNAL_SERVER_ERROR: "Internal server error"

};

export { STATUS_CODES, MESSAGES };