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
})
