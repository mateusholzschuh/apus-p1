/**
 * Product API
 */
angular.module("stockControl").factory("productAPI", function($http, config){
    /**
     * Returns a response with a list of products object from the server
     */
    var _getProducts = function() {
        return $http.get(config.serverUrl + "/products");
    };

    /**
     * Returns a response with a product object where the id is equal the parameter
     * @param {*} id The id of the product required
     */
    var _getProduct = function(id) {
        return $http.get(config.serverUrl + "/products/" + id);
    };

    /**
     * Save a new product into server
     * @param {*} product A product object to save
     */
    var _saveProduct = function(product) {
        return $http.post(config.serverUrl + "/products", product);
    };

    /**
     * Delete the product from the server
     * @param {*} id The id of the product
     */
    var _deleteProduct = function(id) {
        return $http.delete(config.serverUrl + "/products/" + id);
    };

    /**
     * Update a product
     * @param {*} id The id of the product that will be updated
     * @param {*} product The updated product object to send to the server
     */
    var _updateProduct = function(id, product) {
        return $http.put(config.serverUrl + "/products/" + id, product);
    };

    return {
        getProduct : _getProduct,
        getProducts : _getProducts,
        saveProduct : _saveProduct,
        deleteProduct : _deleteProduct,
        updateProduct : _updateProduct
    };
});