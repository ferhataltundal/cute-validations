import { Regexs } from "./regex";
import { PasswordModel } from "./types";

export default class CuteValidate {
  Email(text: string, customRegex?: RegExp) {
    const regex = customRegex || Regexs.email;
    return regex.test(text);
  }
  Ipv4(text: string, customRegex?: RegExp) {
    const regex = customRegex || Regexs.ipv4;
    return regex.test(text);
  }
  Ipv6(text: string, customRegex?: RegExp) {
    const regex = customRegex || Regexs.ipv6;
    return regex.test(text);
  }
  Url(text: string, customRegex?: RegExp) {
    const regex = customRegex || Regexs.url;
    return regex.test(text);
  }
  Port(value: string | number, customRegex?: RegExp) {
    const regex = customRegex || Regexs.port;
    return regex.test(value.toString());
  }
  Range(min: number, max: number, value: number, equal: boolean) {
    if (equal) {
      if (min <= value && max >= value) {
        return true;
      } else {
        return false;
      }
    } else {
      if (min < value && max > value) {
        return true;
      } else {
        return false;
      }
    }
  }
  Alphanumeric(text: string | number, customRegex?: RegExp) {
    const regex = customRegex || Regexs.alphanumeric;
    return regex.test(text.toString());
  }
  Password(
    text: string,
    {
      min,
      max,
      customRegex,
      isIncludeCapitalLetter = false,
      isIncludeNumber = false,
      isIncludeString = false,
      isIncludeSpecialCharacter = false,
    }: PasswordModel
  ) {
    if (min > text.length || text.length > max) {
      return false;
    }
    if (Regexs.empty.test(text)) {
      return false;
    }
    if (customRegex) {
      if (!customRegex.test(text)) {
        return false;
      }
    }
    if (isIncludeNumber) {
      if (!Regexs.includeNumber.test(text)) {
        return false;
      }
    }
    if (isIncludeString) {
      if (!Regexs.includeLetter.test(text)) {
        return false;
      }
    }
    if (isIncludeCapitalLetter) {
      if (!Regexs.includeCapitalLetter.test(text)) {
        return false;
      }
    }
    if (isIncludeSpecialCharacter) {
      if (!Regexs.includeSpecalChar.test(text)) {
        return false;
      }
    }
    return true;
  }
}

/**
@example
*/

const validate = new CuteValidate();
const passValidate = validate.Password("1234.Ab", {
  min: 5,
  max: 25,
  isIncludeNumber: true,
  isIncludeString: true,
  isIncludeCapitalLetter: true,
  isIncludeSpecialCharacter: true,
});

console.log(passValidate);
/**
@example
*/
