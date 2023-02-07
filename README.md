Короче!

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
