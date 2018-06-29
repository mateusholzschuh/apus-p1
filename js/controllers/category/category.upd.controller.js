/**
 * Category Controller
 * > Handle the update of the categories
 */
angular.module("stockControl").controller("categoryUpdController", function($scope, categoryAPI, $location, $routeParams) {

    /**
     * Load the data into form
     */
    categoryAPI.getCategory($routeParams.id).then(
        //ok
        function(response) {
            $scope.category = response.data;
        },
        //problem
        function(response) {
            $location.path("/error");
        }
    );

    /**
     * This function update the data into server with the edited category object
     */
    $scope.updCategory = function () {
        categoryAPI.updateCategory($routeParams.id, $scope.category).then(
            function(response) {
                //response ok
                //go to the listing
                $location.path("/category");                
            },
            function(response) {
                //response with errors
                bootbox.alert("Ocorreu um erro ao atualizar a categoria!");                
            }
        );
        
    };
    
});