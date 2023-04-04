import { FlagImage } from "../../components";
import { LanguageEnum, PageText } from "../../models";

export const HomeArticleIntro: PageText = {
  title: "Welcome to the Home Page!",
  text: {
    eng:
      <p>"Hello! \n This site will help you to teach your kid(s) languages. We will use simple words written on a cards. All cards divided into categories. Use menu above to select theme."</p>,
    rus:
      <p>"Привет! \n Этот сайт поможет вам научить ваших детей языкам. Мы будем использовать простые слова, написанные на карточках. Все карты разделены на категории. Используйте меню выше, чтобы выбрать тему."</p>,
    ukr:
      <p>"Привіт! \n Цей сайт допоможе вам навчити ваших дітей мовам. Ми будемо використовувати прості слова, написані на картках. Всі карти розділені на категорії. Використовуйте меню вище, щоб вибрати тему."</p>,
  },
};

export const HomeArticleLangSwitch: PageText = {
  title: "How to switch language",
  text: {
    [LanguageEnum.eng]:
      `Use the flag buttons in the Main Menu to switch between different languages.`,
    [LanguageEnum.rus]:
      "Используйте кнопки в виде флагов в главном меню для переключения между разными языками.",
    [LanguageEnum.ukr]:
      "Використовуйте кнопки у вигляді прапорів у головному меню, щоб переключатися між різними мовами.",
  },
};

export const TestArticle: PageText = {
  title: 'test',
  text: {
    eng: FlagImage({language: {str: LanguageEnum.eng, flag: '🇬🇧', isoCode: 'gb'}}),
    rus: FlagImage({language: {str: LanguageEnum.eng, flag: '🇬🇧', isoCode: 'gb'}}),
    ukr: FlagImage({language: {str: LanguageEnum.eng, flag: '🇬🇧', isoCode: 'gb'}}),

  }
}

