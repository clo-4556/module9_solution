(function() {
    angular.module('MenuApp').config(RoutesConfig); 

    // Protecting the dependency from minification
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']; 
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Had to add this protection in here otherwise page would not load - ensures any unknown urls go to homepage
        $urlRouterProvider.otherwise('/'); 
        
        // Home state when users land on the home page
        $stateProvider.state('home', {
            url: '/', 
            template: '<h1>Welcome to our Restaurant!</h1><a ui-sref="categories">View Menu</a>'

        })

        
        // Categories state where categories are fetched and passed into the categories component
        .state('categories', {
            url: '/categories', 
            template: '<categories categories="$ctrl.categories"></categories>', 
            controller: function(categories) {
                this.categories = categories.data; 
            }, 
            controllerAs: '$ctrl', 
            resolve: { 
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories(); 
                }]
            }
            
        })

        // Items state where items are fetched for which ever category user selects and passes to the items component
        .state('items', {
            url: '/items/{categoryShortName}', 
            template: '<items items="$ctrl.items"></items>', 
            controller: function(items) {
                this.items = items.data.menu_items; 
            }, 
            controllerAs: '$ctrl', 
            resolve: {
                items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName); 
                }
                ]
            }
        }); 

        
    }
})(); 
