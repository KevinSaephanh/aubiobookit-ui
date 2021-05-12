export default class Constants {
  static readonly LOGIN_ERROR = "The email/password entered is incorrect";

  // Username validation errors
  static readonly USERNAME_LENGTH_ERROR =
    "Username length must be between 5 to 20 characters";
  static readonly USERNAME_REGEX_ERROR = "";
  static readonly USERNAME_ALREADY_IN_USE_ERROR =
    "This username already exists";
  static readonly USERNAME_NOT_FOUND_ERROR =
    "There is no user associated with this username";

  // Email validation errors
  static readonly EMAIL_LENGTH_ERROR =
    "Email length must be between 7 and 50 characters";
  static readonly EMAIL_ALREADY_IN_USE_ERROR = "This email already exists";
  static readonly EMAIL_REGEX_ERROR = "";

  // Password validation errors
  static readonly PASSWORD_LENGTH_ERROR =
    "Password length must be between 7 and 100 characters";
  static readonly PASSWORD_REGEX_ERROR =
    "Password must contain at least a capital letter and number";

  // Password mismatch error
  static readonly PASSWORDS_MISMATCH_ERROR = "Passwords must match!";
}
