// Created one way binding to link items component to the template

(function() {
    angular.module('MenuApp').component('items', {
        bindings: { items: '<'}, 
        templateUrl: 'items.template.html'
    }); 
})(); 