/**
 * Stock Controller
 * > Handle the list and delete functions
 */
angular.module("stockControl").controller("stockController", function($scope, _entries, stockAPI, $route) {
    
    //get the entries from server
    $scope.entries = _entries.data; 
    
    /**
     * Delete the entry where the id is the same of the parameter
     * @param {*} id The id of the entry to delete
     */
    $scope.delEntry = function (id) {
        //open a modal to confirm the exclusion
        bootbox.confirm("Deseja deletar essa entrada do estoque?", function(result){
            //if the user click on "sim"
            if(result) {
                //delete the entry
                stockAPI.deleteEntry(id).then(
                    //ok
                    function(response) {
                        bootbox.alert("Entrada deletada com sucesso!");
                        //reload the page
                        $route.reload();
                    },
                    //problem
                    function(response) {
                        bootbox.alert("Ocorreu um erro ao deletar a entrada! :(");
                    }
                );
            }
        });
    };

    /**
     * Delete the entries that's selected in the list
     */
    $scope.delEntries = function() {
        //open a modal to confirm the exclusion
        bootbox.confirm("Deseja deletar todas as entradas do estoque selecionadas?", function(result) {
            //if the user click on "sim"
            if(result) {
                //delete each entry selected
                $scope.entries.forEach(function(e) {
                    if(e.selected) {
                        stockAPI.deleteEntry(e.id).then(
                            //ok
                            function(response) {
                                //do nothing
                            },
                            //problem
                            function(response) {
                                bootbox.alert("Ocorreu um erro ao apagar uma das entradas!");
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
    $scope.totalItems = $scope.entries.length;    
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