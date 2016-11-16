angular.module('ContactApp', [])
.service('contactService', function (){
  var self = this
  self.contacts = [
]
  self.list = function (){
    return self.contacts
  }
  self.add =  function(contact){
    self.contacts.push(contact)
  }
  self.checkclick = function(){

  }

})
.controller('AddContactController' , function ($scope,contactService){
    $scope.save = function () {
      var contact = { text: $scope.text}
      contactService.add(contact)
      resetform()
      function resetform(){
       $scope.text = ''
      }
     }
    }
