/**
 * Route configuration
 */
angular.module("stockControl").config(function ($routeProvider) {
    /**
     * loaading route tests
     */
    $routeProvider.when("/l", {
        templateUrl: "view/loading.html"
    });

    /**
     * Index route
     */
    $routeProvider.when("/", {
        templateUrl: "view/index.html"
    });


    /**
     * Category route config
     */

    /* Listing */
    $routeProvider.when("/category", {
        templateUrl: "view/category/category.html",
        controller: "categoryController",
        resolve: {
            _categories: function(categoryAPI){
                return categoryAPI.getCategories();
            }
        }
    });

    /* Add form */
    $routeProvider.when("/category/add", {
        templateUrl: "view/category/category-add.html",
        controller: "categoryAddController"
    });

    /* Update form */
    $routeProvider.when("/category/update/:id", {
        templateUrl: "view/category/category-upd.html",
        controller: "categoryUpdController"
    });


    /**
     * Product route config
     */

     /* Listing */
    $routeProvider.when("/product", {
        templateUrl: "view/product/product.html",
        controller: "productController",
        resolve: {
            _products: function(productAPI) {
                return productAPI.getProducts();
            }
        }
    });

    /* Add form */
    $routeProvider.when("/product/add", {
        templateUrl: "view/product/product-add.html",
        controller: "productAddController"
    });

    /* Update form */
    $routeProvider.when("/product/update/:id", {
        templateUrl: "view/product/product-upd.html",
        controller: "productUpdController"
    });


    /**
     * Stock route config
     */

     /* Listing */
    $routeProvider.when("/stock", {
        templateUrl: "view/stock/stock.html",
        controller: "stockController",
        resolve: {
            _entries: function(stockAPI) {
                return stockAPI.getEntries();
            }
        }
    });

    /* Add form */
    $routeProvider.when("/stock/add", {
        templateUrl: "view/stock/stock-add.html",
        controller: "stockAddController"
    });

    /* Update form */
    $routeProvider.when("/stock/update/:id", {
        templateUrl: "view/stock/stock-upd.html",
        controller: "stockUpdController"
    });


    /**
     * Error route config
     */
    //$routeProvider.otherwise({redirectTo: "/category"});
    $routeProvider.otherwise({templateUrl: "view/error.html"});
});