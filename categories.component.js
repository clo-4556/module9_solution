// Declare the categories component with binding and linking to the template

(function() {
    angular.module('MenuApp').component('categories', {
        bindings: { categories: '<' }, 
        templateUrl: 'categories.template.html'
    }); 
})(); 