var MyFilterApp = angular.module('MyFilterApp',[]);

//defien the controller//


MyFilterApp.controller('MyFilterCtrl',function($scope){

var data = {
	firstName: 'JENNA',
	surname: 'GRANT',
	dateJoined: new Date(2010, 2, 23),
	consumption: 123.659855,
	plan: 'super-basic-plan',
	monthlyUsageHistory:
		[123.659855,
		89.645222,
		97.235644,
		129.555555,
		188.699855,
		65.652545,
		123.659855,
		89.645222,
		97.235644,
		129.555555,
		188.699855,
		65.652545]
};

//assign to scope//
$scope.myData = data;
$scope.users = [
'Albert Pai',
'Jake Hsu',
'Jack Hanford',
'Scott Robinson',
'Diwank Singh'
];

})

MyFilterApp.filter('greet',function(){
	return function (name){
		return 'Hello,'+name+'!';
	};
alert("hey!")
});