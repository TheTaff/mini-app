# Angular Mini-App (Test Task)

## Ссылки
* **Живое демо (GitHub Pages):** [https://thetaff.github.io/mini-app/](https://thetaff.github.io/mini-app/)
* **Репозиторий:** [https://github.com/TheTaff/mini-app](https://github.com/TheTaff/mini-app)

## Технологический стек
Проект разработан с использованием последних версий инструментов:

**Angular 19+** (Standalone components, Signals) 
**TypeScript** 
**HTML5 / CSS3** 
**Angular CLI** для сборки и деплоя 

## Реализованный функционал

1. **Welcome Page:** Главная страница с приветствием и навигацией.
2. **Menu Page:** Страница со списком элементов и чекбоксами.
3. **Reactive Logic:** * Динамическое отслеживание выбранных пунктов. Автоматический расчет общего количества и суммарного значения выбранных элементов в Header.
4. **Static Data:** Использование статичного JSON-массива для имитации данных из БД.


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

