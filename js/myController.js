angular.module('myApp.indexCtrl',[])
.controller('indexCtrl',['$scope',function($scope){
    $scope.arr=[
        {
            name:'aaa',
            age:12
        },{
            name:'bbb',
            age:13
        },{
            name:'ccc',
            age:14
        },{
            name:'ddd',
            age:15
        }
    ];
}]);