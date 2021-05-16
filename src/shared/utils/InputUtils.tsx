// @ts-ignore
import Filter from "bad-words";
import * as EmailValidator from "email-validator";
import PasswordValidator from "password-validator";

export default class InputUtils {
  static readonly hasBadWord = (value: string): boolean => {
    const filter = new Filter({ regex: /\*|\.|$/gi });
    return filter.isProfane(value);
  };

  static readonly isValidEmail = (email: string): boolean => {
    return EmailValidator.validate(email);
  };

  static readonly isValidUsername = (username: string): boolean => {
    const regex = new RegExp(/^([a-zA-Z0-9_-]){5,20}$/);
    return regex.test(username);
  };

  static readonly isValidPassword = (password: string): boolean => {
    // List of enabled special characters
    const specialChars = ["!", "#", "%", "&", "*", ",", "-", "_", ".", "@"];

    // Schema for password validation
    const schema = new PasswordValidator();
    schema
      .is()
      .min(7)
      .is()
      .max(100)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(1)
      .has()
      .oneOf(specialChars);

    // Validate password using schema
    return schema.validate(password) as boolean;
  };
}
