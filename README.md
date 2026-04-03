# Quasar Project

Vue 3 + Quasar + Capacitor приложение для Android.

## Технологии

- **Vue 3** + **TypeScript** + **Vite**
- **Quasar Framework** - UI компоненты
- **Vue Router** - маршрутизация
- **Pinia** - управление состоянием
- **Sass/SCSS** - стили
- **ESLint + Prettier** - линтинг и форматирование
- **Capacitor** - мобильная сборка

## Установка

```bash
npm install
```

## Разработка

```bash
npm run dev
```

## Сборка веб-версии

```bash
npm run build
```

## Сборка APK для Android

### Требования

1. **Android Studio** должна быть установлена
2. **Android SDK** должен быть доступен
3. Переменные окружения:
   - `ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk`
   - `ANDROID_SDK_ROOT=%LOCALAPPDATA%\Android\Sdk`

### Шаги сборки

```bash
# 1. Сборка веб-версии
npm run build

# 2. Синхронизация с Capacitor
npx cap sync

# 3. Открытие в Android Studio для сборки APK
npx cap open android
```

В Android Studio:
- Build > Build Bundle(s) / APK(s) > Build APK(s)
- APK будет в: `android/app/build/outputs/apk/debug/app-debug.apk`

## Структура проекта

```
src/
├── main.ts           # Точка входа
├── App.vue           # Корневой компонент
├── router/           # Vue Router конфигурация
├── stores/           # Pinia stores
├── pages/            # Страницы
└── quasar-variables.scss  # Переменные Quasar
```

## Полезные команды

```bash
# Линтинг
npm run lint

# Добавить iOS платформу (требуется macOS)
npm install @capacitor/ios
npx cap add ios

# Обновить Capacitor
npx cap sync
```

npx cap open android