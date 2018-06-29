/**
 * Product Controller
 * > Handle the list and delete functions
 */
angular.module("stockControl").controller("productController", function($scope, _products, productAPI, $location, $route) {
    $scope.products = _products.data;
    
    /**
     * Delete the product where the id is the same of the parameter
     * @param {*} id The id of the product to delete
     */
    $scope.delProduct = function (id) {
        //open a modal to confirm the exclusion
        bootbox.confirm("Deseja deletar esse produto?", function(result){
            //if the user click on "sim"
            if(result) {
                //delete the product
                productAPI.deleteProduct(id).then(
                    //ok
                    function(response) {
                        bootbox.alert("Produto deletado com sucesso!");
                        //reload the page
                        $route.reload();
                    },
                    //problem
                    function(response) {
                        bootbox.alert("Ocorreu um erro ao deletar o produto! :(");
                    }
                );
            }
        });
    };

    /**
     * Delete the products that's selected in the list
     */
    $scope.delProducts = function() {
        //open a modal to confirm the exclusion
        bootbox.confirm("Deseja deletar todos os produtos selecionados?", function(result) {
            //if the user click on "sim"
            if(result) {
                //delete each product selected
                $scope.products.forEach(function(e) {
                    if(e.selected) {
                        productAPI.deleteProduct(e.id).then(
                            //ok
                            function(response) {
                                //do nothing
                            },
                            //problem
                            function(response) {
                                bootbox.alert("Ocorreu um erro ao apagar um dos produtos!");
                            }
                        );
                    }
                });
                //reload the page
                $route.reload();
            }
        });
    };

    // pagination settings
	$scope.currentPage = 1;
    $scope.totalItems = $scope.products.length;    
	$scope.entryLimit = 10; // items per page

    /**
     * Utils, used into listing.
     */
    $scope.isSomeSelected = function(objs) {
        return objs.some(function(obj) {
            return obj.selected;
        });
    };

    /**
     * Sort function; used to sort a table.
     */
    $scope.sort = function(key) {
        $scope.keysort = key;
        $scope.reverseSort = !$scope.reverseSort;
    };
});