# Update

Обновил Header, добавив в него ссылки на микросервисы, а также вывод токена и удаление его из браузера.

Замените ваши текущие папки компонентов на новые, затем нужно решить некоторые моментики:

1. У вас должен быть .env файл в корне проекта, пример смотрите в сервисе burnout-test. Там вы должны определить 4 переменные меню, просто скопируйте их у меня.

2. У вас должна быть установлена куки-либа. Находиться она должна в папке utils. Также посмотрите в репе burnout-test как я ее применил.

P.S. куки либа измененная копируйте мою

3. В App.js я использую следующую конструкцию:

```
const [token, setToken] = useState(CookieLib.getCookieToken())
```

а затем:

```
<Header token={token} setToken={setToken} />
```

# Короче!

Я \*\*\*\*ся пытаться сделать красиво (создать npm пакет), поэтому текущий гайд по установке Menu-Lib выглядит так:

## Если у вас React

1. Заходим в /src/components и копируем все папки в свой проект. (По идее у вас такая же структура должна быть, но не суть)
2. В App.js пишем

    `import Header from "./components/Header/Header"` - это мой компонент (Menu-lib)

    `import "bootstrap/dist/css/bootstrap.min.css"` - это нужно для того чтобы работал bootstrap

3. Не забываем установить bootstrap:

    `npm install react-bootstrap bootstrap`

    или

    `yarn add react-bootstrap bootstrap`

4. У вас в проекте есть папка public. В нее нужно положить картинку public/logo.png

5. Все должно заработать!

    Если нет, пишите в тг @Alekssey7227

## Если у вас не React

Пока не придумал
