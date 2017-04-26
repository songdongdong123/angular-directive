angular.module('myApp.demoDir',[])
.directive('ngTest',function(){
    return {
        templateUrl:'../temp/directive.html',
        restrict:'E',
        scope:{
            data:'=',
            name:'='
        },
        link:function(scope){
            var mark = document.querySelector('.mark');
            scope.show=function(){
                scope.name=true;
            }
            scope.hide=function(){
                scope.name=false;
            }
            scope.anmiation = function(){
                mark.style.transform="translateX(-400px)";
            }
        }
    }
})