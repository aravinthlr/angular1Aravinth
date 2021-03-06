angular.module("app",['ui.router','login','home'])
	.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('login');
	//$stateProvider.state('app',{url:'home',controller:'appCtrl',template:'<div>'+{{name}}+'</div>'});
});

var login=angular.module("login",[]);
login.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('login',{
		url:'/login',
			templateUrl:'app/views/login.html',
			controller:'loginCtrl'});
});
login.factory("loginService",function($http){
	var service = {};
	console.log(location.origin+location.pathname);
	service.getLoginList = function() {
		return $http({
                 method: 'GET',
                 url: 'app/data/login.json'
                // headers: {'Authorization': AppConstants.authToken +' '+ sessionStorage.getItem('token')}
         });

	}
			 return  service;
});
login.controller('loginCtrl',function($scope,$state,loginService){
	$scope.name = 'ramesh';

	$scope.validate = function() {
	loginService.getLoginList().then(function(success){
		console.log(success);
		if($scope.userName == success.data.userName && $scope.password == success.data.password)$state.go('home');
	},function(error){
		console.log(error);
		});
	}

		
});
angular.module('home',[])
.config(function($stateProvider){
$stateProvider.state("home",{url:'/home',templateUrl:'app/views/home.html',controller:'homeCtrl'})})
.controller('homeCtrl',function($scope){
	$scope.message = "successfully navigated";
});
