window.ListCtrl = function ($scope, $http, $routeParams) {
    $scope.listPhone = {};
    $scope.formPhone = {
        id: "",
        ten: "",
        hang: "",
        gia: ""
    };
    const apiPhone = "http://localhost:3000/DienThoai";
    $http.get(apiPhone).then(function (response) {
        $scope.listPhone = response.data;
    });
    //add
    $scope.addPhone = function (event) {
        $http.post(apiPhone, $scope.formPhone).then(function (response) {
            $scope.listPhone = response.data;
            alert('them thanh cong');
        })
    };
    //rouParams
    $scope.id = $routeParams.id;
    $scope.Detail = {};
    if ($scope.id && $scope.id > 0) {
        $http.get(apiPhone + "/" + $scope.id).then(function (response) {
            $scope.Detail = response.data;
        })
    }
    //detail

    // $scope.detailPhone = function (event,index) {
    //     event.preventDefault();
    //     let phong=$scope.listPhone[index];
    //     $scope.formPhone.id=phong.id;
    //     $scope.formPhone.ten=phong.ten;
    //     $scope.formPhone.hang=phong.hang;
    //     $scope.formPhone.gia=phong.gia;
    //     $scope.viTriUpdate=index;
    // }
    //update
    $scope.updatePhone = function () {
        let api = "http://localhost:3000/DienThoai/" + $scope.id;
        $http.put(api, $scope.Detail).then(function (response) {
            $scope.Detail = response.data;
            alert("cap nhat thanh cong");
        })
    };
}