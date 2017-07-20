angular.module('home')
.controller('HomeCtrl', [
	'$scope',
    '$timeout',
	function($scope, $timeout){
  
	    $scope.submitButton = "Submit";
        $scope.userDataList = [];

		$scope.onSubmit = function(data){
            $scope.submitButton = "Loading...";

			$timeout(function(){
                var length = $scope.userDataList.length;
                var lastIndex = length - 1;
                var lastValue = $scope.userDataList[lastIndex] || {};
                var newSNo = parseInt(lastValue.sNo || 0) + 1;

                data.sNo = newSNo;

                $scope.userDataList.push(angular.copy(data));
                $scope.submitButton = "Submit";
                $scope.data = {};

            }, 5000);
		};

        $scope.submitBtnClass = function(invalid){
            if(invalid){
                return 'disabled'
            } else {
                return 'btn-primary'
            }
        };
	}
]);