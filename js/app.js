/* Create the module and import the dependencies */
angular.module("stockControl", ["ngRoute", "ui.bootstrap"]);

//filter to list with pagination
angular.module("stockControl").filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});