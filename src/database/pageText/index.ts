import { LanguageEnum, PageText } from "../../models";

export const HomeArticle: PageText = {
  title: "Welcome to the Home Page!",
  text: {
    [LanguageEnum.eng]:
      "Hello! \n This site will help you to teach your kid(s) languages. We will use simple words written on a cards. All cards divided into categories. Use menu above to select theme.",
    [LanguageEnum.rus]:
      "Привет! \n Этот сайт поможет вам научить ваших детей языкам. Мы будем использовать простые слова, написанные на карточках. Все карты разделены на категории. Используйте меню выше, чтобы выбрать тему.",
    [LanguageEnum.ukr]:
      "Привіт! \n Цей сайт допоможе вам навчити ваших дітей мовам. Ми будемо використовувати прості слова, написані на картках. Всі карти розділені на категорії. Використовуйте меню вище, щоб вибрати тему.",
  },
};
