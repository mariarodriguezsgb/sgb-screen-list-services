'use strict';

angular.module('sgb-screen-product-list', ['megazord'])
    .controller('ProductListController', ['$stateParams', '$scope', function($stateParams, $scope){
            $scope.items = $stateParams.data;
    }]);