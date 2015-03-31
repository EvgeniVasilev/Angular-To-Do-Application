app.controller('mainCtrl', mainCtrl);

// creates controller
function mainCtrl($scope) {  
   
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.data = [];
    $scope.todos = [
        {"action": "Get groceries", complete: false},
        {"action": "Call plumber", complete: false},
        {"action": "Buy running shoes", complete: true},
        {"action": "Buy flowers", complete: false},
        {"action": "Call family", complete: false}
    ];
    $scope.numberOfPages = function () {
        return Math.ceil($scope.todos.length / $scope.pageSize);
    };

    $scope.todosLenght = function () {
        return $scope.todos.length;
    };

    for (var i = 0; i < $scope.todos.length; i++) {
        $scope.data.push($scope.todos);
    }


    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (item) {
            if (item.complete) {
                alert(item.action + ' is completed! It will be removed!');
                // uncoment this to perform backend 
                /*$.ajax({
                 'method': 'GET',
                 'url': 'some.php',
                 'value': {
                 'action': item.action,
                 'status': item.complete
                 }
                 }).done(function (data) {
                 // todo
                 });*/
            }
            return !item.complete;
        });
    };

    $scope.addTo = function () {
        if (!$scope.formToDo) {
            alert('Add To Do');
            return;
        }


        if ($scope.formToDo) {
            $scope.todos.push({'action': $scope.formToDo, 'complete': false});
            $scope.formToDo = '';
            // uncoment this to perform backend 
            /*$.ajax({
             'method': 'GET',
             'url': 'some.php',
             'value': {
             'action':$scope.formToDo,
             'status': 'false'
             }
             }).done(function (data) {
             // todo
             });*/
        }
    };
}

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function () {
    return function (input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});