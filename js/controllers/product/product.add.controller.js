/**
 * Product Controller
 * > Handle the list and delete functions
 */
angular.module("stockControl").controller("productAddController", function($scope, productAPI, categoryAPI, $location) {
    categoryAPI.getCategories().then(function(response){
        $scope.categories = response.data;
    });
    /**
     * The function add a new product into server
     * @param {Object} product The new product to persist
     */
    $scope.addProduct = function (product) {
        productAPI.saveProduct(product).then(
            function(response) {
                //Response ok
                //Go to the listing
                $location.path("/product");
            },
            function(response) {
                //problem
                bootbox.alert("Ocorreu um erro ao adicionar o produto!");
            }
        );
        
    };
});