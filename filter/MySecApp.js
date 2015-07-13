var MySecApp = angular.module('MySecApp',[]);
MySecApp.filter('greet',function(){
	return function (name){
		return 'Hello,'+name+'!';
	};
alert("hey!")
});