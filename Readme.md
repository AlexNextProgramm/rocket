# Библиотека реактивности js

Эта библиотека похожа jquery только элементы испольуются реакта. Тут еще много работы в пополнениие функий. Но некоторые проекты работают уже на первой версии


#### Сборка библиотеки

```
npx tsc
```

после сборки создастся папка собраной библиотеки

### Основное подключение

файл событий ListenEvents - подключается один раз в проекте.

он собирает события в элементе чтобы вы могли использовать

```
import './dist/src/core/ListenEvents'
import { $ } from './dist/src/core/rocet'

$('div').on('click', (ev:MouseEvent)=>{
  // ваши действия 
})
```

Rocet - это основной объект который везет все функции похожие jquery но главной особеностью является что может забирать 

```
import { integ } from './dist/src/core/integeration'

// document.createElement
const variant1 = $('<div></div>'); //create element string
const variant2 = $(<div></div>); // create element tsx or jsx

// document.querySelector
const variant3 = $('div'); // search element DOM.
const variant4 = $('.myclass');
const variant5 = $('#myid');

 // HTMLElement.append
$('.right').add(<h1> Тест add</h1>);
$('.right').add($(<h1> Тест add2</h1>));
$('.right').add($(<h1> Тест add3</h1>).item());

```
