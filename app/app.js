/**
 * Created by ng-graphic on 06-04-2017.
 */
var app =angular.module('app',['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/linkOne');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('linkOne', {
            url: '/linkOne',
            templateUrl: './component/linkOne/index.html',
            controller:'linkOneController',
            controllerAs:'home'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('linkTwo', {
            // we'll get to this in a bit
            url: '/linkTwo',
            templateUrl: './component/linkTwo/index.html',
            controller:'linkTwoController'
            //    controllerAs:'about'
        })
        .state('linkThree', {
            // we'll get to this in a bit
            url: '/linkThree',
            templateUrl: './component/linkThree/index.html',
            controller:'linkThreeController'
            //    controllerAs:'about'
        });
});
