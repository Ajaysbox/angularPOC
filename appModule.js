var appModule = angular.module('appModule',[]);
appModule.controller('myAppCtrl',function($scope){
	$scope.isHidden = true;

	$scope.showHideColors = function(){
		console.log(!$scope.isHidden);
		$scope.isHidden = !$scope.isHidden;
	};
});