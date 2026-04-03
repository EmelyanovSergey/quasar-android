# Quasar Android App

Android-приложение, созданное с использованием Quasar Framework и Capacitor.

## Технологии

- **Frontend**: Quasar Framework (Vue 3 + Vite)
- **UI**: Quasar Components (Material Design)
- **Android Wrapper**: Capacitor 6.x
- **State Management**: Pinia

## Структура проекта

```
quasar-android/
├── src/
│   ├── boot/              # Boot files (Pinia)
│   ├── components/        # Vue компоненты
│   ├── css/               # Стили (SCSS)
│   ├── layouts/           # Макеты страниц
│   ├── pages/             # Страницы приложения
│   ├── router/            # Маршрутизация
│   ├── stores/            # Pinia stores
│   └── App.vue            # Главный компонент
├── public/                # Публичные файлы
├── quasar.config.js       # Конфигурация Quasar
├── capacitor.config.json  # Конфигурация Capacitor
└── package.json           # Зависимости
```

## Начало работы

### Установка зависимостей

```bash
npm install
```

### Разработка (браузер)

```bash
npm run dev
```

### Сборка для production

```bash
npm run build
```

### Android

```bash
# Добавление Android платформы (первый раз)
npm run cap:add

# Синхронизация после сборки
npm run build && npm run cap:sync

# Открытие в Android Studio
npm run cap:open
```

## Сборка APK

1. Откройте проект в Android Studio: `npm run cap:open`
2. Соберите APK: Build > Build Bundle(s) / APK(s) > Build APK(s)
3. APK будет в `android/app/build/outputs/apk/debug/`

## Требования

- Node.js 18+ или 20+
- Android Studio (для Android сборки)
- JDK 17+

## Лицензия

Private
