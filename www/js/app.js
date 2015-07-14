var app = angular.module('starter', ['ionic']);

app.controller('AppCtrl', function($scope, $timeout){
  function add(x, y, callback){
    return $timeout(function(){
        return x + y;
    }, 500)
  }
  
  var startTime = Date.now();
 // var promise = add(2, 3);
 /* promise.then(function(result){
    $scope.result = result;
    $scope.elapsedTime = Date.now() - startTime;
  }).then(function(result){
    $scope.result = result;
    $scope.elapsedTime = Date.now() - startTime;
  });
  */
  
  add(5, 3)
    .then(function(result){
      console.log(result);
    })
    .then(function(result){
      console.log(result);
    })
    .then(function(result){
      alert(result);
    });
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
