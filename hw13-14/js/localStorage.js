'use strict';

var testProgram = {

  questions: [
    {
      title: 'Какое существует соглашение о названии переменных jQuery объектов?',
      answers: [
        {
          text: 'Переменные следует создавать с приставкой $',
          correct: true
        },
        {
          text: 'Camel case, с большой буквы',
          correct: false
        },
        {
          text: 'С маленькой буквы, разделитель слов - нижнее подчеркивание',
          correct: false
        }
      ]
    },
    {
      title: 'Какие символы обозначают начало и конец шаблона?',
      answers: [
        {
          text: '<...>',
          correct: false
        },
        {
          text: '{{...}}',
          correct: false
        },
        {
          text: '<%...%>',
          correct: true
        }
      ]
    },
    {
      title: 'С помощью какой переменной в обработчике событий клавиатуры можно увидеть, какая именно клавиша была нажата?',
      answers: [
        {
          text: 'event.keyCode;',
          correct: true
        },
        {
          text: 'event.pressedButton',
          correct: false
        },
        {
          text: 'keyCode',
          correct: false
        }
      ]
    }
  ]
};

localStorage.setItem('questions', JSON.stringify(testProgram));