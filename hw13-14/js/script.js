'use strict';

var questionStorage = localStorage.getItem('questions');
questionStorage = JSON.parse(questionStorage);

var testProgram = {

  testBody: document.body,
  testWrapper: document.createElement('div'),
  testHeader: document.createElement('h1'),
  testContent: document.createElement('content'),
  testForm: document.createElement('form'),
  testButton: document.createElement('button'),
  //  modal
  testModal: document.createElement('div'),
  testOverlay: document.createElement('div'),
  testModalText: document.createElement('div'),
  testModalTextHeader: document.createElement('p'),


  createdTest: function () {
    this.testWrapper.classList.add('wrapper');

    this.testModal.classList.add('modal');
    this.testOverlay.classList.add('overlay');
    this.testModalText.classList.add('modal-text');
    this.testModalTextHeader.innerHTML = 'Результат';
    this.testHeader.classList.add('header__h1');
    this.testHeader.innerHTML = 'Тест по программированию';

    this.testButton.classList.add('button__result');
    this.testButton.setAttribute('type', 'submit');
    this.testButton.innerHTML = 'Отправить мои результаты';



    this.testBody.appendChild(this.testWrapper);
    this.testWrapper.appendChild(this.testHeader);
    this.testWrapper.appendChild(this.testContent);
    this.testContent.appendChild(this.testForm);
    this.testForm.appendChild(this.testButton);
    this.testBody.appendChild(this.testOverlay);
    this.testBody.appendChild(this.testModal);
    this.testModal.appendChild(this.testModalText);
    this.testModal.appendChild(this.testModalTextHeader);

  },

  generateElement: function () {

    var q = 0;

    for (var i = 0; i < questionStorage.questions.length; i++) {

      var testBoxQuestion = document.createElement('div');
      var testQuestionH2 = document.createElement('h2');

      testQuestionH2.innerHTML = questionStorage.questions[i].title;

      testBoxQuestion.classList.add('question__box' + i);
      testQuestionH2.classList.add('question__h2');

      this.testForm.appendChild(testBoxQuestion);
      testBoxQuestion.appendChild(testQuestionH2);


      for (var y = 0; y < questionStorage.questions[i].answers.length; y++) {

        var answerBox = document.createElement('div');
        var formQuestionInput = document.createElement('input');
        var formQuestionLabel = document.createElement('label');

        formQuestionInput.classList.add('form__question__input');
        formQuestionInput.setAttribute('type', 'radio');
        formQuestionInput.setAttribute('name', 'answer ' + i);
        formQuestionInput.setAttribute('id', 'question' + q);
        formQuestionLabel.setAttribute('for', 'question' + q);

        var formQuestionAnswer = document.createElement('span');
        formQuestionAnswer.classList.add('answer__text');
        formQuestionAnswer.innerHTML = questionStorage.questions[i].answers[y].text;

        testBoxQuestion.appendChild(answerBox);
        answerBox.appendChild(formQuestionInput);
        answerBox.appendChild(formQuestionLabel);
        formQuestionLabel.appendChild(formQuestionAnswer);

        if ((questionStorage.questions[i].answers[y].correct) == true) {
          formQuestionInput.classList.add('correct');
        }

        q++;
      }
    }
  }
};

testProgram.createdTest();
testProgram.generateElement();



var aQ = 0;

$(function () {

  var $result = $('.button__result');

  $result.on('click', function (e) {
    e.preventDefault();
    var $modal = $('.modal');
    var $modalText = $('.modal-text');
    var $overlay = $('.overlay');
    var $checkedInput = $('input:checked');
    var $correct = $('.correct');


    var rightAnsws = ["input_1_3", "input_2_3", "input_3_3"];
    var checkedIDs = $(':checked').map(function () {
      return this.id;
    });

    if (
      checkedIDs.length !== rightAnsws.length ||
      $(':checked', 'div.question_box1').length > 0 ||

      $(':checked', 'div.question_box2').length > 0 ||

      $(':checked', 'div.question_box3').length > 0
    ) {
      $modalText.html('Ошибка... Убедитесь, что вы ответили на все вопросы.');
      $modal.css({
        margin: '-180px 0 0 -240px'
      });
      $overlay.css({
        display: 'block'
      });

      $overlay.one('click', function () {
        $modal.css({
          margin: '-10000px 0 0 -240px'
        });
        $overlay.css({
          display: 'none'
        });
      });


    } else {
      for (var i = 0; i < $checkedInput.length; i++) {

        if ($correct[i] == $checkedInput[i]) {
          aQ++;
        }
      }
      $modalText.html('Колличество верных ответов - ' + aQ);
      $modal.css({
        margin: '-180px 0 0 -240px'
      });
      $overlay.css({
        display: 'block'
      });

      $overlay.one('click', function () {
        $modal.css({
          display: 'none'
        });
        $overlay.css({
          display: 'none'
        });
        location.reload();
      });
    }
  });
});