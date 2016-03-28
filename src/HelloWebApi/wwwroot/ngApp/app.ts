namespace HelloWebApi {

    angular.module('HelloWebApi', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/home.html',
                controller: HelloWebApi.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/about.html',
                controller: HelloWebApi.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('list', {
                url: '/list',
                templateUrl: '/ngApp/listProducts.html',
                controller: HelloWebApi.Controllers.ListController,
                controllerAs: 'controller'

            })
            .state('movieList', {
                url: '/movieList',
                templateUrl: '/ngApp/movieList.html',
                controller: HelloWebApi.Controllers.MovieController,
                controllerAs: 'controller'
            })
            .state('addMovie', {
                url: '/addMovie',
                templateUrl: '/ngApp/addMovie.html',
                controller: HelloWebApi.Controllers.AddMovieController,
                controllerAs: 'controller'
            })
            .state('editMovie', {
                url: '/editMovie/:id',
                templateUrl: '/ngApp/editMovie.html',
                controller: HelloWebApi.Controllers.EditMovieController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}
