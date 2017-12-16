// http://docs.angularjs.org/guide/forms
var app = angular.module('alpi',['ngResource','ngRoute', 'ui.bootstrap']);
app.config(function($locationProvider, $routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/home.html',
                controller  : 'mainController'
            })
            .when('/events', {
                templateUrl : 'templates/events.html',
                controller  : 'mainController'
            })
            .when('/contactus', {
                templateUrl : 'templates/contact.html',
                controller  : 'loginController'
            })
            .when('/aboutus', {
                templateUrl : 'templates/about.html',
                controller  : 'mainController'
            })
            .when('/choosetemplates', {
                templateUrl : 'templates/biodata-templates.html',
                controller  : 'loginController'
            })
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'templates/login.html',
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: '/templates/register.html',
            });
        ;
   // $locationProvider.html5Mode(true);
    });
app.controller('mainController', function($scope) {
  $scope.user = null;
    $scope.myMainInterval = 5000;
    $scope.slides = [
        {
            image: './lib/images/home/slide1.jpg',
            captionTop: 'Started on 25 Dec, 2017',
            heading: 'Party Celebration',
            caption: 'Media Advertising Revenue Solution'
        },
        {
            image: './lib/images/home/slide2.jpg',
            captionTop: 'Started on 25 Dec, 2017',
            heading: 'Party Celebration',
            caption: 'Media Advertising Revenue Solution'
        },
        {
            image: './lib/images/home/slide3.jpg',
            captionTop: 'Started on 25 Dec, 2017',
            heading: 'Party Celebration',
            caption: 'Media Advertising Revenue Solution'
        }
    ];

    $scope.services = [
        {
            name: 'Mentoring',
            designation: 'Founder and CEO, GOQii',
            description: 'Vishal is a 38-year-old entrepreneur',
            image: './lib/images/mentors/visal.jpg'
        },
        {
            name: 'Funding',
            designation: 'Co Founder and CEO, Quikr',
            description: 'Pranay Chulet is an Indian entrepreneur and business executive.',
            image: './lib/images/mentors/paranay.jpg'
        },
        {
            name: 'Consulting',
            designation: 'Founder and CEO, GOQii',
            description: 'Vishal is a 38-year-old entrepreneur',
            image: './lib/images/mentors/visal.jpg'
        },
        {
            name: 'Co-working',
            designation: 'Founder and CEO, GOQii',
            description: 'Vishal is a 38-year-old entrepreneur',
            image: './lib/images/mentors/visal.jpg'
        },
        {
            name: 'Consulting',
            designation: 'Founder and CEO, GOQii',
            description: 'Vishal is a 38-year-old entrepreneur',
            image: './lib/images/mentors/visal.jpg'
        },
        {
            name: 'Co-working',
            designation: 'Founder and CEO, GOQii',
            description: 'Vishal is a 38-year-old entrepreneur',
            image: './lib/images/mentors/visal.jpg'
        }
    ];

    $scope.mentors = [
        {
            name: 'Vishal Gondal',
            designation: 'Founder and CEO, GOQii',
            description: 'Vishal is a 38-year-old entrepreneur',
            image: './lib/images/mentors/visal.jpg'
        },
        {
            name: 'Pranay Chulet',
            designation: 'Co Founder and CEO, Quikr',
            description: 'Pranay Chulet is an Indian entrepreneur and business executive.',
            image: './lib/images/mentors/paranay.jpg'
        },
        {
            name: 'Vishal Gondal',
            designation: 'Founder and CEO, GOQii',
            description: 'Vishal is a 38-year-old entrepreneur',
            image: './lib/images/mentors/visal.jpg'
        },
        {
            name: 'Vishal Gondal',
            designation: 'Founder and CEO, GOQii',
            description: 'Vishal is a 38-year-old entrepreneur',
            image: './lib/images/mentors/visal.jpg'
        }
    ];

    $scope.testimonials = [
        {
            name: "Simo Bennis",
            image: "./lib/images/mentors/visal.jpg",
            designation: "Founder and CEO Amazon",
            country: "France",
            description: "Just returned back to London! The speech was  perfectly received and flawless, so I am very satisfied with everything ����  Indeed I will be working with your team again and recommend you for all speech services!"
        },
        {
            name: "Joe Berry",
            image: "./lib/images/mentors/paranay.jpg",
            designation: "Founder and CEO ZappRx",
            country: "Boston",
            description: "It could not have gone any better. Everyone was cracking up for pretty much the entire speech. Thanks again for the awesome material… I’ll give you a shout if I ever do best man duties again."
        }
    ]

    $scope.teams = [
        {
            name: 'Rahul Narvekar',
            designation: 'Founder',
            description: 'A seasoned startup entrepreneur, having earned his stripes in Mumbai and accumulated a track record in Delhi, Rahul has enormous experience (proven experience with a success record to boot, with global attestations to back it up) with ecommerce out of India, and he knows this space from its inception to where it is today.He has a professional degree from IIM Calcutta, and will gleefully share with you all the hallowed rules ',
            image: './lib/images/teams/rahul-narvekar.jpg'
        },
        {
            name: 'Nishant Manchanda',
            designation: 'Co-Founder',
            description: 'Nishant has over 15 years of experience in marketing, sales, Customer Interface consulting, and operations/supply chain in various domains. He has experienced the startup culture for almost 10 years. He likes to give shape to new ideas and test them quickly.He is an avid professional who strongly believes in “Execution is the key to success for any idea”. He has strong abilities of bootstrapping the idea and ',
            image: './lib/images/teams/nishant-manchanda.jpg'
        },
        {
            name: 'Souniya Khurana',
            designation: 'Head - Community Development',
            description: 'With her background in Hospitality and a core experience of almost a decade, in customer-centric roles, Souniya has led teams in business development with acclaimed multi-nationals and dynamic start-ups with the belief in delivering experiences.Her keen observation and insight on how not only organisations, but individuals as well are constantly struggling to keep pace and ensure survival, has led ',
            image: './lib/images/teams/souniya-khurana-team.jpg'
        },
        {
            name: 'Bhavik Jhaveri',
            designation: 'CEO & Founder - Pretr Pvt. Ltd',
            description: 'Bhavik is a serial entrepreneur and an emerging market observer. Over a decade long experience in successfully building & leading ventures across payments, consumer internet, technology, and omnichannel retailing, both in Indian and global market.In his previous roles, he has been part of founding teams at EBS, Fashionandyou, & Craftsvilla. Bhavik has also been part of a New York based venture ',
            image: './lib/images/teams/bhavik-team.jpg'
        }
    ];
    
    $scope.templates = [
    	{
            image: './lib/images/home/slide1.jpg',
            captionTop: 'Started on 25 Dec, 2017',
            heading: 'Party Celebration',
            caption: 'Media Advertising Revenue Solution'
        },
        {
            image: './lib/images/home/slide2.jpg',
            captionTop: 'Started on 25 Dec, 2017',
            heading: 'Party Celebration',
            caption: 'Media Advertising Revenue Solution'
        },
        {
            image: './lib/images/home/slide3.jpg',
            captionTop: 'Started on 25 Dec, 2017',
            heading: 'Party Celebration',
            caption: 'Media Advertising Revenue Solution'
        }
    ];
});
app.controller('eventController', function($scope) {

});
app.controller('loginController', function($scope) {
    // var vm = this;
    //
    // vm.login = login;
    //
    // (function initController() {
    //     // reset login status
    //     AuthenticationService.ClearCredentials();
    // })();
    //
    // function login() {
    //     vm.dataLoading = true;
    //     AuthenticationService.Login(vm.username, vm.password, function (response) {
    //         if (response.success) {
    //             AuthenticationService.SetCredentials(vm.username, vm.password);
    //             $location.path('/');
    //         } else {
    //             FlashService.Error(response.message);
    //             vm.dataLoading = false;
    //         }
    //     });
    // };
});
app.directive('backToTop', function(){

    return {
        restrict: 'AE'
        , replace: true
        , template: '<div class="back-to-top"><i class="fa fa-chevron-up"></i></div>'
        , link: function($scope, element, attrs) {
console.log('loaded');
            $(window).scroll(function(){

                if ($(window).scrollTop() <= 0) {
                    $(element).fadeOut();
                }
                else {
                    $(element).fadeIn();
                }

            });

            $(element).on('click', function(){
                $('html, body').animate({ scrollTop: 0 }, 'fast');
            });

        }
    }

})



