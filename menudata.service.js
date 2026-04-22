(function() {
    angular.module('data').service('MenuDataService', MenuDataService); 
 
    // Protect dependency from minification
    MenuDataService.$inject = ['$http']; 
    function MenuDataService($http) {
        var self = this; 

        // use a REST API to fetch all the categories in the menu
        self.getAllCategories = function() {
            return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'); 
        }; 

        // fetches all menu items for the category using the category short name
        self.getItemsForCategory = function(categoryShortName) {
            return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'); 
        }; 
    }
})(); 