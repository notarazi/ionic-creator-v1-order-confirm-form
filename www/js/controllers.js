angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) {
    $scope.optionSizes=[
        {id:1,desc:'small'},
        {id:2,desc:'medium'},
        {id:3,desc:'large'},
    ]
    $scope.data={};
    $scope.confirmOrder=function(){
        var strData= angular.toJson($scope.data);
        $state.go('confirm',{paramorder:strData});
    }
    
}])
   
.controller('confirmCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.data=$stateParams.paramorder;
    alert($stateParams.paramorder);
}])
 