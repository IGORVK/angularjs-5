


// Nested controllers- вложенные контроллеры, открывает новые возможности!!! В этом случае мы можем мы можем легко получить доступ к методам родительского контроллеро из
//дочернего. Давайте попробуем. Создадим контроллер myBookCtrl. Пропишем его в шаблоне   <div ng-controller="myBookCtrl">  </div>
// И создадим вложенный контроллер angularBookCtrl <div ng-controller="myBookCtrl"> <div ng-controller="angularBookCtrl"> </div>  </div>
//И создадим второй вложенный контроллер emberBookCtrl <div ng-controller="myBookCtrl"> <div ng-controller="angularBookCtrl"> </div> <div ng-controller="emberBookCtrl"> </div>  </div>
//Теперь давайте опишем контроллеры в main.js
//Смотрим в консоль браузера ... все гуд никаких ошибок
// Теперь давайте создадим кнопку внутри angularBookCtrl и повесим на нее функцию showBook которая будет срабатывать при клике
// <button ng-click = "showBook()">Show Angular Book</button>
// опишем метод showBook() в контроллере angularBookCtrl
 // Если посмотрим в консоль браузера то увидим что кнопка у нас работает и в консоль выводится This is AngularJS book
// Добавим такой же метод в родительский контроллер но только выведем в консоль строку Тhis is some book 
// Скопируем из angularBookCtrl в emberBookCtrl подпишем её Show Ember Book
// Открываем консоль браузера жмен на кнопку Show Ember Book и видим МАГИЮ!!!))) Кнопка не описана в контроллере emberBookCtrl НО она выводи строку This is some book
// Это отработал метод из родительского контроллера
// Как это происходит?
//Когда Angular не находит метод showBook вo вложенном контроллере он проверяет родительский!!!
// Что это позволяет делать?
// Это лекго позволяет выносить повторяющуюся логику из нескольких контроллеров в родительский контроллер!!!!
// Если у нас будет повторяющийся метод во вложенных контроллерах то мы легко его можем вынести в родительский!!! И он будет вызываться по клику кнопки во вложенных контроллерах
// Если же мы хотим переопределить поведение этого метода то мы можем его просто добавить как мы делали в контроллере angulaBookCtrl
// Давайте переопределим этом метод и в emberBookCtrl
// Теперь метод showBook будет вызываться и из emberBookCtrl так он там переопределен
// Из родительского контроллера метод вызываться теперь не будет

// Так работают вложенные контроллеры


var app = angular.module('app', []);

app.controller('myBookCtrl', function($scope){
   
    $scope.showBook = function(){
      console.log('This is some book');  
    };


});

app.controller('angularBookCtrl', function($scope){
   
    $scope.showBook = function($scope){
      console.log('This is AngularJS book');
    };

});

app.controller('emberBookCtrl', function($scope){
   
    $scope.showBook = function($scope){
        console.log('This is Ember Book');
    };


});
