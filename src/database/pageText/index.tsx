import { FlagImage } from "../../components";
import { LanguageData, LanguageEnum, PageText } from "../../models";

export function HomeArticleIntro(language: LanguageData): JSX.Element {
  switch (language.enumCode) {
    case LanguageEnum.eng:
      return (
        <div>
          <p>Hello!</p>
          <p>
            This site will help you to teach your kids languages. We will use
            simple words written on a cards. All cards divided into categories.
            Use menu above to select theme.
          </p>
        </div>
      );
    case LanguageEnum.rus:
      return (
        <div>
          <p>Привет!</p>
          <p>
            Этот сайт поможет вам научить ваших детей языкам. Мы будем
            использовать простые слова, написанные на карточках. Все карточки
            разделены на категории. Используйте меню выше, чтобы выбрать тему.
          </p>
        </div>
      );
    case LanguageEnum.ukr:
      return (
        <div>
          <p>Привіт!</p>
          <p>
            Цей сайт допоможе вам навчити ваших дітей мовам. Ми будемо
            використовувати прості слова, написані на картках. Всі карти
            розділені на категорії. Використовуйте меню вище, щоб вибрати тему.
          </p>
        </div>
      );

    default:
      return <p>{`Error loading article with ${language} language`}</p>;
  }
}

export function HomeArticleLangSwitch(language: LanguageData): JSX.Element {
  switch (language.enumCode) {
    case LanguageEnum.eng:
      return (
        <p>
          Use the <FlagImage language={language} />
          flag buttons
          <FlagImage language={language} /> in the Main Menu to switch between
          different languages.
        </p>
      );
    case LanguageEnum.rus:
      return (
        <p>
          Используйте кнопки в виде <FlagImage language={language} />
          флагов
          <FlagImage language={language} /> в главном меню для переключения
          между разными языками.
        </p>
      );
    case LanguageEnum.ukr:
      return (
        <p>
          Використовуйте кнопки у вигляді <FlagImage language={language} />
          прапорів
          <FlagImage language={language} /> у головному меню, щоб переключатися
          між різними мовами.
        </p>
      );

    default:
      return <p>{`Error loading article with ${language} language`}</p>;
  }
}

export function HomeArticleAppName(language: LanguageData): JSX.Element {
  switch (language.enumCode) {
    case LanguageEnum.eng:
      return (
        <div>
          <p>Who is She?</p>
          <p>
            This site is called "Colors for Her", but who is "Her"? It's simle.
            I'm talking about my little daughter! And if you have a son or
            several kids then use a button in the middle to change this site
            name!
          </p>
        </div>
      );
    case LanguageEnum.rus:
      return (
        <div>
          <p>Кто же Она?</p>
          <p>
            Этот сайт называется «Цвета для Нее», но кто такая «Она»? Это
            просто. Я говорю о моей маленькой дочери! А если у вас есть сын или
            несколько детей, используйте кнопку посередине, чтобы изменить
            название этого сайта!
          </p>
        </div>
      );
    case LanguageEnum.ukr:
      return (
        <div>
          <p>Хто вона?</p>
          <p>
            Цей сайт називається «Кольори для Неї», але хто така «Вона»? Це
            просто. Я говорю про мою маленьку дочку! А якщо у вас є син чи
            кілька дітей, використовуйте кнопку посередині, щоб змінити назву
            цього сайту!
          </p>
        </div>
      );

    default:
      return <p>{`Error loading article with ${language} language`}</p>;
  }
}

// export const test: PageText = {
//   title: "test article",
//   text: {
//     [LanguageEnum.eng]: <p>Hi</p>,
//     [LanguageEnum.rus]: <p>Привет</p>,
//     [LanguageEnum.ukr]: <p>Здоровеньки булы</p>,
//   },
// };
