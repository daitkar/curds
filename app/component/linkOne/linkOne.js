/**
 * Created by ng-graphic on 07-04-2017.
 */
app.controller('linkOneController',function ($scope,dataGetService) {
    $scope.data="data";
    var data = dataGetService.collectData();
    data.then(function (data) {
        $scope.AllEmployee = data;
        console.log(" $scope.AllEmployee", $scope.AllEmployee.data);

    });

    $scope.EmpModel = {
        Id: 0,
        Salary: 0,
        Name: ''
    };

    $scope.EmpList = [];
    $scope.AddData = function () {
        var _emp = {
            Id: $scope.EmpList.length ,
            Name: $scope.EmpModel.Name,
            Salary: $scope.EmpModel.Salary
        };
        $scope.EmpList.push(_emp);
        ClearModel();
    };

    $scope.DeleteData = function (emp) {
        var _index = $scope.EmpList.indexOf(emp);
        $scope.EmpList.splice(_index, 1);
    };

    $scope.BindSelectedData = function (emp) {
        $scope.EmpModel.Id = emp.Id;
        $scope.EmpModel.Name = emp.Name;
        $scope.EmpModel.Salary = emp.Salary;
    };

    $scope.UpdateData = function () {
        _.each($scope.EmpList, function (e) {
            if (e.Id == $scope.EmpModel.Id) {
                e.Name = $scope.EmpModel.Name;
                e.Salary = $scope.EmpModel.Salary;
            }
        });
        ClearModel();
    };

    function ClearModel() {
        $scope.EmpModel.Id =  $scope.EmpList.length;
        $scope.EmpModel.Name = '';
        $scope.EmpModel.Salary = 0;
    }
});