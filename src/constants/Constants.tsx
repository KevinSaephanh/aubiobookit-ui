export default class Constants {
  // Username validation errors
  static readonly USERNAME_MIN_LENGTH_ERROR =
    "Username must be at least 5 characters long";
  static readonly USERNAME_MAX_LENGTH_ERROR =
    "Username cannot exceed 20 characters";
  static readonly USERNAME_REGEX_ERROR = "";

  // Email validation errors
  static readonly EMAIL_MIN_LENGTH_ERROR =
    "Email must be at least 7 characters long";
  static readonly EMAIL_MAX_LENGTH_ERROR = "Email cannot exceed 50 characters";
  static readonly EMAIL_REGEX_ERROR = "";

  // Password validation errors
  static readonly PASSWORD_MIN_LENGTH_ERROR =
    "Password must be at least 7 characters long";
  static readonly PASSWORD_MAX_LENGTH_ERROR =
    "Password cannot exceed 100 characters";
  static readonly PASSWORD_REGEX_ERROR = "";

  // Password mismatch error
  static readonly PASSWORDS_MISMATCH_ERROR = "Passwords must match!";
}
