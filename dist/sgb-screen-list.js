(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-list', ['megazord'])
  .controller('sgb-screen-list-controller', ['_router', '_screenParams','$stateParams', '$scope', 'lodash', function(_router, _screenParams, $stateParams, $scope, _){
        $scope.items = $stateParams.data;
        $scope.searchQuery = "";
        $scope.filteredItems = $scope.items;
        $scope.showSearch = typeof(_screenParams.showSearch) === 'undefined'? true : _screenParams.showSearch;

        $scope.title = _screenParams.title || 'list_title';

        $scope.filterItems = function(searchQuery){
            console.log('scope is ' + searchQuery);
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
        console.log('Going to fire event with ' + item);
        _router.fireEvent({
         name: 'itemClick',
         params: {
           item: item
         }
        })
    };

  }]);
},{}]},{},[1]);
