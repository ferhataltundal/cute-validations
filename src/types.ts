interface RegexModel {
  Email: (text: string, customRegex?: RegExp) => boolean;
  IPv4: (text: string, customRegex?: RegExp) => boolean;
  IPv6: (text: string, customRegex?: RegExp) => boolean;
  Url: (text: string, customRegex?: RegExp) => boolean;
  Port: (value: string | number, customRegex?: RegExp) => boolean;
  Range: (min: number, max: number, value: number, equal: boolean) => boolean;
  Alphanumeric: (value: string | number, customRegex?: RegExp) => boolean;
  Password: (
    text: string,
    {
      min,
      max,
      customRegex,
      isIncludeCapitalLetter,
      isIncludeNumber,
      isIncludeString,
      isIncludeSpecialCharacter,
    }: PasswordModel
  ) => boolean;
}

interface PasswordModel {
  min: number;
  max: number;
  customRegex?: RegExp;
  isIncludeNumber?: boolean;
  isIncludeString?: boolean;
  isIncludeSpecialCharacter?: boolean;
  isIncludeCapitalLetter?: boolean;
}

type RegexType = {
  [key in string]: RegExp;
};


export { RegexType, PasswordModel, RegexModel };
