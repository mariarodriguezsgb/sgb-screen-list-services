'use strict';

angular.module('sgb-screen-list', ['megazord'])
  .controller('sgb-screen-list-controller', ['_router', '_screen', '_screenParams','$stateParams', '$scope', 'lodash', function(_router, _screen, _screenParams, $stateParams, $scope, _){

        _screen.initialize($scope, _screenParams);

        $scope.items = $stateParams.data;
        $scope.searchQuery = "";
        $scope.filteredItems = $scope.items;
        $scope.showSearch = typeof(_screenParams.showSearch) === 'undefined'? true : _screenParams.showSearch;

        $scope.filterItems = function(searchQuery){
            var search = searchQuery.toLowerCase();
            $scope.filteredItems = _.filter($scope.items, function(item){
                return (item.title && item.title.toLowerCase().indexOf(search) != -1) ||
                    (item.detail1 && item.detail1.toLowerCase().indexOf(search) != -1) ||
                    (item.detail2 && item.detail2.toLowerCase().indexOf(search) != -1) ||
                    (item.url && item.url.toLowerCase().indexOf(search) != -1);
            });
        };

        $scope.cancelSearch = function(){
            $scope.searchQuery = "";
            $scope.filteredItems = $scope.items;
        };

        $scope.itemClickHandler = function(item){
            //Nothing to do but fire the event
            _router.fireEvent({
                 name: 'itemClick',
                 params: {
                   item: item
                 }
            })
        };
  }]);