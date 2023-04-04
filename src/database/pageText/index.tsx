import { FlagImage } from "../../components";
import { LanguageEnum, PageText } from "../../models";
import { useAppContext } from "../../support/context/appContextProvider";

function CreateMyArticles() {
  const app = useAppContext();

  // const HomeArticleIntro: PageText = {
  //   title: "Welcome to the Home Page!",
  //   text: {
  //     [LanguageEnum.eng]: (
  //       <div>
  //         <p>"Hello!"</p>
  //         <p>
  //           "This site will help you to teach your kids languages. We will use
  //           simple words written on a cards. All cards divided into categories.
  //           Use menu above to select theme."
  //         </p>
  //       </div>
  //     ),
  //     [LanguageEnum.rus]: (
  //       <div>
  //         <p>"Привет!"</p>
  //         <p>
  //           " Этот сайт поможет вам научить ваших детей языкам. Мы будем
  //           использовать простые слова, написанные на карточках. Все карты
  //           разделены на категории. Используйте меню выше, чтобы выбрать тему."
  //         </p>
  //       </div>
  //     ),
  //     [LanguageEnum.ukr]: (
  //       <div>
  //         <p>"Привіт!"</p>
  //         <p>
  //           "Цей сайт допоможе вам навчити ваших дітей мовам. Ми будемо
  //           використовувати прості слова, написані на картках. Всі карти
  //           розділені на категорії. Використовуйте меню вище, щоб вибрати тему."
  //         </p>
  //       </div>
  //     ),
  //   },
  // };

  // const HomeArticleLangSwitch: PageText = {
  //   title: "How to switch language",
  //   text: {
  //     [LanguageEnum.eng]: (
  //       <p>
  //         Use the <FlagImage language={app.language.primaryLanguage} />
  //         flag buttons
  //         <FlagImage language={app.language.secondaryLanguage} /> in the Main
  //         Menu to switch between different languages.
  //       </p>
  //     ),
  //     [LanguageEnum.rus]: (
  //       <p>
  //         Используйте кнопки в виде
  //         <FlagImage language={app.language.primaryLanguage} />
  //         флагов
  //         <FlagImage language={app.language.secondaryLanguage} /> в главном меню
  //         для переключения между разными языками.
  //       </p>
  //     ),
  //     [LanguageEnum.ukr]: (
  //       <p>
  //         Використовуйте кнопки у вигляді
  //         <FlagImage language={app.language.primaryLanguage} />
  //         прапорів
  //         <FlagImage language={app.language.secondaryLanguage} /> у головному
  //         меню, щоб переключатися між різними мовами.
  //       </p>
  //     ),
  //   },
  // };

  const test: PageText = {
    title: "test article",
    text: {
      [LanguageEnum.eng]: <p>Hi</p>,
      [LanguageEnum.rus]: <p>Привет</p>,
      [LanguageEnum.ukr]: <p>Здоровеньки булы</p>,
    },
  };

  return {
    // HomeArticleIntro: HomeArticleIntro,
    // HomeArticleLangSwitch: HomeArticleLangSwitch,
    Test: test,
  };
}

const articles = CreateMyArticles();
// export const HomeArticleIntro = articles.HomeArticleIntro;
// export const HomeArticleLangSwitch = articles.HomeArticleLangSwitch;
export const testArticle = articles.Test;
