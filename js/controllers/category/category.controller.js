/**
 * Category Controller
 * > Handle the list and delete functions
 */
angular.module("stockControl").controller("categoryController", function($scope, _categories, categoryAPI, $route, filterFilter) {
    $scope.categories = _categories.data;

    /**
     * Delete the category where the id is the same of the parameter
     * @param {*} id The id of the category to delete
     */
    $scope.delCategory = function (id) {
        //open a modal to confirm the exclusion
        bootbox.confirm("Deseja deletar essa categoria?", function(result){
            //if the user click on "sim"
            if(result) {
                //delete the category
                categoryAPI.deleteCategory(id).then(
                    //ok
                    function(response) {
                        bootbox.alert("Categoria deletada com sucesso!");
                        //reload the page
                        $route.reload();
                    },
                    //problem
                    function(response) {
                        bootbox.alert("Ocorreu um erro ao deletar a categoria! :(");
                    }
                );
            }
        });
    };

    /**
     * Delete the categories that's selected in the list
     */
    $scope.delCategories = function() {
        //open a modal to confirm the exclusion
        bootbox.confirm("Deseja deletar todas as categorias selecionadas?", function(result) {
            //if the user click on "sim"
            if(result) {
                //delete each category selected
                $scope.categories.forEach(function(e) {
                    if(e.selected) {
                        categoryAPI.deleteCategory(e.id).then(
                            //ok
                            function(response) {
                                //do nothing
                            },
                            //problem
                            function(response) {
                                bootbox.alert("Ocorreu um erro ao apagar uma das categorias!");
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
    $scope.totalItems = $scope.categories.length;    
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