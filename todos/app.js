angular.module('TodoApp', [])
  .service('todoService', function (){
    var self = this
    self.datas = [ {text : 'Test'},{text : 'Test 1'}
    ]
    self.list = function (){
      return self.datas
    }
    self.add =  function(data){
      self.datas.push(data)
    }
  })
  .controller('AddDataController' , function ($scope,todoService){
    $scope.save = function () {
      var data = { text: $scope.text}
      todoService.add(data)
      resetform()
    }
    function resetform(){
     $scope.text = ''
    }
  })
  .controller('ListTodoController', function ($scope,todoService){
      $scope.datas = todoService.list()
  })
