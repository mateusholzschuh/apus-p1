/**
 * Stock Controller
 * > Handle the list and delete functions
 */
angular.module("stockControl").controller("stockUpdController", function($scope, productAPI, stockAPI, $routeParams, $location) {

    //list the products available
    productAPI.getProducts().then(
        function(response) {
            $scope.products = response.data;
        }
    );

    /**
     * Load the data into form
     */
    stockAPI.getEntry($routeParams.id).then(
        //ok
        function(response) {
            $scope.entry = response.data;
            $scope.entry.date_time = new Date($scope.entry.date_time);
        },
        //problem
        function(response) {
            $location.path("/error");
        }
    );

    /**
     * This function update the data into server with the edited product object
     */
    $scope.updEntry = function () {
        //update the datetime
        $scope.entry.date_time = new Date();
        //try to update
        stockAPI.updateEntry($routeParams.id, $scope.entry).then(
            function(response) {
                //response ok
                //go to the listing
                $location.path("/stock");                
            },
            function(response) {
                //response with errors
                bootbox.alert("Ocorreu um erro ao atualizar a entrada!");                
            }
        );
        
    };
});