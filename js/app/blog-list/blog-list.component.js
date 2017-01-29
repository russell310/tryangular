'use strict';

angular.module('blogList').
	component('blogList',{
		templateUrl: 'templates/blog-list.html',
		controller: function($scope){
			$scope.title = 'hi there';
			$scope.clicks = 0;
			$scope.someClickTest = function(){
				console.log('clicked');
				$scope.clicks +=1;
				$scope.title = 'Clicked '+$scope.clicks+ ' times';
			}
		}
	});