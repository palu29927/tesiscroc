/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e6fd9d010a37502b05b1d46
*
* You will get 10% discount for each one of your friends
* 
*/


var app = angular.module('tesiscroc_App', [
'ngRoute',
'ngResource'
]).config(function ($routeProvider) {
	
	$routeProvider
	
//DO NOT EDIT THIS ROUTES, USE NEXT COMMENT SECTION

// START - ROUTE
	.when('/users/:id', {
	  templateUrl: 'html/UserEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/users', {
	  templateUrl: 'html/UserList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/public/users', {
	  templateUrl: 'html/UserListPublic.html',
	})
	.when('/home', {
	  templateUrl: 'html/home.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/public/register', {
	  templateUrl: 'html/register.html',
	})

// END - ROUTE

// INSERT HERE YOUR CUSTOM ROUTES
		

// DEFAULT ROUTES
    .when('/profile', {
      templateUrl: 'js/security/profile/Profile.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
      },
    })
    .when('/manage-users', {
      templateUrl: 'js/security/manageUser/UsersList.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole("ADMIN"); }]
      },
    })
    .when('/manage-users/:id', {
      templateUrl: 'js/security/manageUser/UsersEdit.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole("ADMIN"); }]
      },
    })
	.when('/login', {
	    templateUrl: 'html/Login.html',
	    controller: 'LoginController'
	})
	.when('/logout', {
	      templateUrl: 'html/Login.html',
	      controller: 'LogoutController',
    	  resolve: {
    		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
    	  },
	})
	.when('/', {
	      templateUrl: 'html/Home.html',
    	  resolve: {
    		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
    	  },
	})
	.otherwise({
		templateUrl: 'html/404.html',
	});
	
});