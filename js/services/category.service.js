/**
 * Category API
 */
angular.module("stockControl").factory("categoryAPI", function($http, config, pagerService){
    /**
     * Return a response with a list of categories object
     */
    var _getCategories = function() {
        return $http.get(config.serverUrl + "/categories");
    };

    /**
     * Return a response with a category object that id is equal the parameter
     * @param {*} id The id of the category required
     */
    var _getCategory = function(id) {
        return $http.get(config.serverUrl + "/categories/" + id);
    };

    /**
     * Save a new category into server
     * @param {*} category A category object to save
     */
    var _saveCategory = function(category) {
        return $http.post(config.serverUrl + "/categories", category);
    };

    /**
     * Delete the category from the server
     * @param {*} id The id of the category
     */
    var _deleteCategory = function(id) {
        return $http.delete(config.serverUrl + "/categories/" + id);
    };

    /**
     * Update a category
     * @param {*} id The id of the category that will be updated
     * @param {*} category The updated category object to send to the server
     */
    var _updateCategory = function(id, category) {
        return $http.put(config.serverUrl + "/categories/" + id, category);
    };

    return {
        getCategory : _getCategory,
        getCategories : _getCategories,
        saveCategory : _saveCategory,
        deleteCategory : _deleteCategory,
        updateCategory : _updateCategory
    };
});