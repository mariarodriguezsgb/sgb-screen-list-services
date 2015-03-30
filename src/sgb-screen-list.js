'use strict';

angular.module('sgb-screen-list', ['megazord'])
    .controller('ListController', ['$stateParams', '$scope', function($stateParams, $scope){
            $scope.items = $stateParams.data;
    }]);