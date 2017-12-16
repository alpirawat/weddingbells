// http://docs.angularjs.org/guide/forms
var alpi = angular.module('alpi',['ngResource','ngRoute', 'ui.bootstrap']);
alpi.config(function($routeProvider) {
    console.log($routeProvider);
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/home.html',
                controller  : 'loginController'
            })
            .when('/profile', {
                templateUrl : 'templates/profile.html',
                controller  : 'loginController'
            });
    });
alpi.controller('loginController', function($scope) {
  $scope.user = null;
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: '../images/home/slide1.jpg'
        },
        {
            image: '../images/home/slide2.jpg'
        },
        {
            image: '../images/home/slide3.jpg'
        }
    ];

  //$scope.posts = [{id:1,title:"title1",content:"content1",caption:"caption1"},{id:2,title:"title2",content:"content2",caption:"caption2"}];
//  $scope.share = function(){
//    FB.ui(
//    {
//        method: 'share',
//        name: 'Alpi Rawat.',
//        href:'https://www.facebook.com/alpirawatgallery/',
//        //link: 'https://www.facebook.com/alpirawatgallery/'+post.id,
//        //picture: 'http://localhost:4300/lib/images/1.jpg',
//        //caption: post.caption,
//        //description: 'This is the content of the "description" field, below the caption.',
//        //message: ''
//    });
//  }
})



