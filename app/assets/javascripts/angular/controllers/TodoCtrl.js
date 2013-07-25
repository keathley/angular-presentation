function TodoCtrl($scope) {
  $scope.entries = [
   { data: "Todo 1" },
   { data: "Todo 2" },
   { data: "Todo 3" }
  ]

  $scope.addEntry = function() {
    $scope.entries.push($scope.newEntry);
    $scope.newEntry = {};
  }

  $scope.removeEntry = function(idx) {
    $scope.entries.splice(idx, 1);
  }
}