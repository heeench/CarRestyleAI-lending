# CarRestyle AI Landing

Маркетинговый лендинг для `CarRestyle AI`, собранный как отдельный проект на `Astro + React + TypeScript`.

Лендинг опирается на:

- визуальный язык основного frontend-проекта `CarRestyle AI`;
- тёмную hi-tech эстетику с glassmorphism;
- продающую подачу под детейлинг-студии и тюнинг-ателье;
- фирменную анимацию подсветки деталей автомобиля, перенесённую из продуктового интерфейса.

## Что уже реализовано

- SEO-слой для production:
  - `canonical`;
  - `robots`;
  - `Open Graph`;
  - `Twitter Card`;
  - `sitemap`;
  - `robots.txt`;
  - `JSON-LD` для `Organization`, `SoftwareApplication` и `FAQPage`;
- hero-блок с сильным B2B-оффером под детейлинг, оклейку, антихром и тюнинг;
- отдельный showcase-блок с анимацией подсветки кузовных зон автомобиля;
- клиентский sales-сценарий, который ведёт к записи;
- форма заявки на демо;
- мобильный sticky CTA;
- адаптивный layout для desktop / tablet / mobile;
- production build без ошибок;
- контент, сфокусированный на продаже прикладной ценности, а не ML-терминов.

## Структура контента

- секции:
  - hero;
  - демонстрация продукта;
  - выгоды для студии;
  - какие услуги проще продавать;
  - сценарий продажи;
  - FAQ;
  - CTA с заявкой на демо.

## Стек

- `Astro 5`
- `three.js` — 3D-конфигуратор в секции «Демонстрация»
- `TypeScript`
- `CSS`

## Запуск проекта

```bash
npm install
npm run dev
```

После запуска dev-сервер обычно будет доступен по адресу:

```text
http://localhost:4321
```

## Сборка production-версии

```bash
npm run build
```

Preview production-сборки:

```bash
npm run preview
```

## Деплой

Сервер — `141.11.211.206` (Ubuntu, nginx, PHP-FPM), корень сайта — `/var/www/carrestyleai.ru`.
Форма заявки (`public/send.php`) исполняется через PHP-FPM, поэтому хостинг без PHP не подходит.

```bash
npm run build
rsync -rlt --delete --exclude=.DS_Store dist/ root@141.11.211.206:/var/www/carrestyleai.ru/
```

Блок nginx лежит на сервере в `/etc/nginx/sites-available/carrestyleai-landing`, отдельно от `app` и `api`.

Карта окружения `public/config/interior.exr` — сжатая копия исходника
`src/assets/environment/interior-float32.exr` (6,3 МБ → 0,4 МБ). Пересобрать:

```bash
/Applications/Blender.app/Contents/MacOS/Blender --background --factory-startup \
  --python tools/environment-map.py -- convert \
  src/assets/environment/interior-float32.exr public/config/interior.exr 512 256 ZIP
```

## Структура проекта

```text
src/
  assets/
    car-preview.png
    surfaces/
  components/
    CarSpotlight.tsx
    LeadForm.tsx
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
astro.config.mjs
public/
  favicon.svg
  og-image.svg
  robots.txt
  site.webmanifest
package.json
tsconfig.json
```

## Ключевые файлы

- `src/pages/index.astro`
  Главная страница лендинга и весь маркетинговый контент.

- `src/components/CarSpotlight.tsx`
  React-компонент с фирменной анимацией подсветки деталей автомобиля.

- `src/components/LeadForm.tsx`
  Форма заявки на демо с подготовкой письма для входящего лида.

- `src/styles/global.css`
  Глобальная визуальная система, layout, блоки лендинга и стили анимации.

- `src/layouts/BaseLayout.astro`
  Базовый layout страницы и SEO-мета.

## Источник визуальной анимации

В проект перенесены ассеты и логика из основного frontend `CarRestyle AI`, чтобы на лендинге использовать тот же узнаваемый motion-элемент, что и в продукте:

- `car-preview.png`
- PNG-слои деталей кузова из `src/assets/surfaces`

## Дальнейшие шаги

- при необходимости добавить реальные продуктовые скриншоты;
- подключить реальный endpoint для формы вместо `mailto`;
- добавить аналитику и события на CTA;
- подключить реальный домен и проверить индексацию после деплоя;
- при необходимости добавить кейсы, отзывы и продуктовые скриншоты.
