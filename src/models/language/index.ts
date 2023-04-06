export enum LanguageEnum {
  rus = "rus",
  eng = "eng",
  ukr = "ukr",
}

export type Words = {
  [key in LanguageEnum]: string;
};

export type Article = {
  [key in LanguageEnum]: JSX.Element;
};

export interface LanguageData {
  enumCode: LanguageEnum;
  flag: string;
  isoCode: string;
}
