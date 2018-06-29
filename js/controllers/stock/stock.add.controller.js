/**
 * Stock Controller
 * > Handle the list and delete functions
 */
angular.module("stockControl").controller("stockAddController", function($scope, productAPI, stockAPI, $location) {
    
    //list the products available
    productAPI.getProducts().then(
        function(response) {
            $scope.products = response.data;
        }
    );

    /**
     * The function add a new entry into server
     * @param {Object} entry The new entry to persist
     */
    $scope.addEntry = function (entry) {
        //get the actual datetime
        entry.date_time = new Date();
        //try save it
        stockAPI.saveEntry(entry).then(
            function(response) {
                //Response ok
                //Go to the listing
                $location.path("/stock");
            },
            function(response) {
                //problem
                bootbox.alert("Ocorreu um erro ao adicionar a entrada!");
            }
        );
        
    };
});