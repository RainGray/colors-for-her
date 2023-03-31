export enum LanguageEnum {
  rus = "rus",
  eng = "eng",
  ukr = "ukr",
}

export type Words = {
  [key in LanguageEnum]: string;
};

export interface Language {
  str: LanguageEnum;
  flag: string;
  isoCode: string;
}
