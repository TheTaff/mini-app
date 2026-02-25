# Angular Mini-App (Test Task)

## Ссылки
* **Живое демо (GitHub Pages):** [https://thetaff.github.io/mini-app/](https://thetaff.github.io/mini-app/)
* **Репозиторий:** [https://github.com/TheTaff/mini-app](https://github.com/TheTaff/mini-app)

## Технологический стек
[cite_start]Проект разработан с использованием последних версий инструментов[cite: 2, 5]:
* [cite_start]**Angular 19+** (Standalone components, Signals) [cite: 5]
* [cite_start]**TypeScript** [cite: 4]
* [cite_start]**HTML5 / CSS3** [cite: 3]
* [cite_start]**Angular CLI** для сборки и деплоя 

## Реализованный функционал

1.  [cite_start]**Welcome Page:** Главная страница с приветствием и навигацией[cite: 7, 8].
2.  [cite_start]**Menu Page:** Страница со списком элементов и чекбоксами[cite: 9].
3.  [cite_start]**Reactive Logic:** * Динамическое отслеживание выбранных пунктов[cite: 10].
    * [cite_start]Автоматический расчет общего количества и суммарного значения выбранных элементов в Header[cite: 10, 20].
4.  [cite_start]**Static Data:** Использование статичного JSON-массива для имитации данных из БД[cite: 12].


## Структура проекта
Проект организован по модульному принципу:
* `src/app/pages/welcome` — компонент приветствия.
* `src/app/pages/menu` — основной компонент с логикой меню и подсчетами.
* `src/app/app.routes.ts` — конфигурация маршрутизации (SPA).

## Как запустить проект локально

1.  **Клонируйте репозиторий:**
    ```bash
    git clone [https://github.com/TheTaff/mini-app.git](https://github.com/TheTaff/mini-app.git)
    cd mini-app
    ```

2.  **Установите зависимости:**
    ```bash
    npm install
    ```

3.  **Запустите сервер разработки:**
    ```bash
    ng serve
    ```
    Приложение будет доступно по адресу: `http://localhost:4200/`

