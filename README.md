# Pet Project Monorepo

Проект реализован как монорепозиторий с едиными конфигурациями для:

- ESLint (v9 с flat-конфигом)
- Prettier
- TypeScript
- Husky (v9)
- Lint-staged (v15)

## Требования

- Рекомендуемая версия Node.js: _v22_
- Node.js v23 поддерживается в экспериментальном режиме

---

## Установка

Установка общих зависимостей (из корня монорепозитория):

`npm install`

---

## Линтинг и форматирование

В качестве линтера используется:

- ESLint v9 с flat-конфигурацией
- Prettier для автоматического форматирования
- Husky + Lint-staged для pre-commit хуков

### Автоматическая проверка при коммите:

`git add -A`
`git commit -m "your message"`

При этом автоматически запускаются:

- Prettier (форматирует файлы)
- ESLint (исправляет lint-проблемы)

---

## Структура монорепозитория

Проект реализован через 4 разных сборщика / платформы, каждая в отдельной директории:

### 1. Webpack

- Используется: Webpack v5
- Поддержка: TypeScript, алиасы @
- Установка зависимостей:
  `cd webpack`
  `npm install`

- Запуск разработки:
  `npm run dev`
- Запуск сборки для разработки:
  `npm run build:dev`
- Запуск сборки для продакшн:
  `npm run build:prod`

---

### 2. Vite

- Используется: Vite v6
- Поддержка: TypeScript, алиасы @
- Установка зависимостей:
  `cd vite`
  `npm install`

- Запуск разработки:
  `npm run dev`
- Запуск сборки для продакшн:
  `npm run build`

---

### 3. Remix

- Используется: Vite v6, remix-run v2.14, React v18
- Поддержка: TypeScript, алиасы @
- Установка зависимостей:
  `cd remix`
  `npm install`

- Запуск разработки:
  `npm run dev`
  Тестовая страница по маршруту: /main

- Запуск сборки для продакшн:
  `npm run build`

---

### 4. Nextjs

---

## Скрипты (из корня)

- Форматирование:
  `npm run pretty`

- Проверка ESLint:
  `npm run lint`

- Автоисправление ESLint:
  `npm run lint:fix`

---

## Автоформатирование при сохранении файлов из IDE

Для VSCode необходимо создать в корне проекта директорию .vscode далее внутри:
`touch settings.json`

Также необходимо установить плагин ESLint и Prettier для VSCode

- settings.json:

`{
  // editor
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
    "source.fixAll.stylelint": "always"
  },
  // eslint
  "eslint.format.enable": true,
  "eslint.codeActionsOnSave.rules": null
}`

## Контакты

Автор: [mkozhevnikov2323]  
Лицензия: ISC
