'use strict';

angular.module('sgb-screen-list', ['megazord'])
  .controller('sgb-screen-list-controller', ['$stateParams', '$scope', function($stateParams, $scope){
    $scope.items = $stateParams.data;

    $scope.itemClickHandler = function(){};

    $scope.itemSearchCancelHandler = function(){};

    $scope.itemClickHandler = function(){};

  }]);