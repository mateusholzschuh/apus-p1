/**
 * Category Controller
 * > Handle the insertion of new categories
 */
angular.module("stockControl").controller("categoryAddController", function($scope, categoryAPI, $location) {
    /**
     * The function add a new category into server
     * @param {Object} category The new category to persist
     */
    $scope.addCategory = function (category) {
        categoryAPI.saveCategory(category).then(
            function(response) {
                //Response ok
                //Go to the listing
                $location.path("/category");
            },
            function(response) {
                //problem
                bootbox.alert("Ocorreu um erro ao adicionar a categoria!");
            }
        );
        
    };
});