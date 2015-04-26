'use strict';

angular.module('sgb-screen-list', ['megazord'])
  .controller('sgb-screen-list-controller', ['_router', '_screenParams','$stateParams', '$scope', function(_router, _screenParams, $stateParams, $scope){
      $scope.items = $stateParams.data;
      $scope.title = _screenParams.title || 'list_title';

      $scope.itemSearchHandler = function(){};

      $scope.itemSearchCancelHandler = function(){};

      $scope.itemClickHandler = function(item){
      //Nothing to do but fire the event
      console.log('Going to fire event with ' + item);
      _router.fireEvent({
        name: 'itemClick',
        params: {
          item: item
        }
      })
    };

  }]);