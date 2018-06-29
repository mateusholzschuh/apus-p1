/**
 * Product Controller
 * > Handle the list and delete functions
 */
angular.module("stockControl").controller("productUpdController", function($scope, categoryAPI, productAPI, $routeParams, $location) {

    //list the categories available
    categoryAPI.getCategories().then(
        function(response) {
            $scope.categories = response.data;
        }
    );

    /**
     * Load the data into form
     */
    productAPI.getProduct($routeParams.id).then(
        //ok
        function(response) {
            $scope.product = response.data;
        },
        //problem
        function(response) {
            $location.path("/error");
        }
    );

    /**
     * This function update the data into server with the edited product object
     */
    $scope.updProduct = function () {
        productAPI.updateProduct($routeParams.id, $scope.product).then(
            function(response) {
                //response ok
                //go to the listing
                $location.path("/product");                
            },
            function(response) {
                //response with errors
                bootbox.alert("Ocorreu um erro ao atualizar o produto!");                
            }
        );
        
    };
});