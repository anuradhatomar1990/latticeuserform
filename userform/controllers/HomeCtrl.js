angular.module('home')
.controller('HomeCtrl', [
	'$scope',
    '$timeout',
	function($scope, $timeout){
  
	    $scope.submitButton = "Submit";
        $scope.userDataList = [];

        
        $scope.onEdit = function(index){
            $scope.data = angular.copy($scope.userDataList[index]);
            $scope.isDataEdit = true;
            $scope.selectedIndex = index;
        };
        
        $scope.onDelete = function(index){
            $scope.userDataList.splice(index, 1);
        };
        

		$scope.onSubmit = function(data){
            $scope.submitButton = "Loading...";

			$timeout(function(){

                if ($scope.isDataEdit) {
                    $scope.userDataList[$scope.selectedIndex] = angular.copy(data);
                    $scope.isDataEdit = false;
                    $scope.submitButton = "Submit";
                    $scope.data = {};

                    return;
                }

                var length = $scope.userDataList.length;
                var lastIndex = length - 1;
                var lastValue = $scope.userDataList[lastIndex] || {};
                var newSNo = parseInt(lastValue.sNo || 0) + 1;

                data.sNo = newSNo;

                $scope.userDataList.push(angular.copy(data));
                $scope.submitButton = "Submit";
                $scope.data = {};

            }, 2000);
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


