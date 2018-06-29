/**
 * Stock API
 */
angular.module("stockControl").factory("stockAPI", function($http, config){
    /**
     * Returns a response with a list of entries from the stock
     */
    var _getEntries = function() {
        return $http.get(config.serverUrl + "/stock");
    };

    /**
     * Returns a response with an entry object where the id is equal the parameter
     * @param {*} id The id of the entry required
     */
    var _getEntry = function(id) {
        return $http.get(config.serverUrl + "/stock/" + id);
    };

    /**
     * Save a new entry into server
     * @param {*} entry A entry object to save
     */
    var _saveEntry = function(entry) {
        return $http.post(config.serverUrl + "/stock", entry);
    };

    /**
     * Delete the entry from the server
     * @param {*} id The id of the entry
     */
    var _deleteEntry = function(id) {
        return $http.delete(config.serverUrl + "/stock/" + id);
    };

    /**
     * Update a entry
     * @param {*} id The id of the entry that will be updated
     * @param {*} entry The updated entry object to send to the server
     */
    var _updateEntry = function(id, entry) {
        return $http.put(config.serverUrl + "/stock/" + id, entry);
    };

    return {
        getEntry : _getEntry,
        getEntries : _getEntries,
        saveEntry : _saveEntry,
        deleteEntry : _deleteEntry,
        updateEntry : _updateEntry
    };
});