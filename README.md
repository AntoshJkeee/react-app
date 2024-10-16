# Проект "Template React JS 18.3"

## Команды работы с проектом
- `npm start` - running the project locally
- `npm run build` - optimized version build
- `npm run lint` - lint style and js by all files
- `npm install -g serve` - to install global package for serve build
- `serve -s build` - to run optimization version build

## Стек технологий
- Node.js (v20.11.0)
- React.js (v18.3.1)
- typescript (v5.4.3)
- @bem-react/classname (v1.6.0)
- swiss-knife-scss (1.0.13)

## Архитектура приложения - Feature-Sliced
- **Shared** _(Простые компоненты)_ — многоразовый функционал, оторванный от специфики проекта/бизнеса.
- **Entities** _(Составные компоненты)_ — бизнес-сущности (например, Пользователь, Продукт, Заказ).
- **Features** _(Составные компоненты с бизнес-логикой)_ — взаимодействие с пользователем, действия, которые приносят бизнес-ценность пользователю.
- **Widgets** _(Секции)_ — композиционный слой для объединения объектов и функций в значимые блоки.
- **Pages** _(Страницы)_ — композиционный слой для создания полных страниц из сущностей, функций и виджетов. Линейное представление всех страниц проекта

## Работа с TypeScript
+ Для имен переменных и функций используем `camelCase`, например `fooVar`, `getItem()`
+ Для имен классов, типов и интерфейсов используем `PascalCase`, например `class CarController`
+ Для интерфейсов добавляем преписку `I`, например `IUser`
+ Для типов добавляем преписку `Type`, например `TypeArray`
+ Для `enum` используем `PascalCase`
+ Ставим пробел после присвоения типа, например `const foo: string = 'hello'`
+ Описываем массивы как `array: Foo[] ` вместо `array: Array<Foo>`.
+ Именуем файлы `ts` в `camelCase`, например `accordion.tsx`, `myControl.tsx`, `utils.ts`, `map.ts` и т.д.

## Работа с npm пакетом swiss-knife-scss
Мы используем самописную библиотеку swiss-knife-scss, выложенную и официально зарегистрированную в `npm`. Она позволяет упростить работу с:

- root переменными css
- удобным и оптимизированным подключением шрифтов
- работать в `@layers`-системе, т.е не нарушая специфичность, веса и каскадность
- быстрое настраивание сетки и контейнеров проекта
- миксины, направленные на удобство работы с медиазапросами, скроллбарами и утилитарными классами
- упрощает работу с респонсив дизайнами посредством готовых миксинов


## Работа и поведение sass-lint

sass-lint работает по схеме
- Box
	- Блок включает в себя любое свойство, влияющее на отображение и положение блока
	- К примеру: display, float, position, left, top, height, width
- Border
	- Все что связанно с бордером
	- border, border-image, border-radius и т.д.
- Background
	- Все что связанно с фоном
	- Пример background, background-color, background-image, background-size
- Text
	- Пример font-family, font-size, text-transform, letter-spacing
- Other
	- Все остальное

## Оптимизация SVG картинок
Перед добавлением svg в проект требуется ее оптимизировать через ресурс **https://svgoptimizer.com/ru/**


----------------

### Project tools

- [x] Editor config
- [x] Eslint config
- [x] Prettier config
- [x] Stylelint config
- [x] .gitignore
- [x] Postcss config
- [x] Sass
- [x] TypeScript config
- [x] bem-react/classname
- [x] FSD
- [x] swiss-knife-scss
- [x] раскидать layers
- [x] Readme.md
- [ ] Commitizen
- [ ] Commitlint config
- [ ] cz-customizable
- [ ] Lint Staged
- [ ] React Router Dom
- [ ] Redux Store
- [ ] CI/CD
- [ ] Docker file
