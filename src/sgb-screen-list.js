'use strict';
angular.module('sgb-screen-list', ['megazord'])
    .controller('sgb-screen-list-controller',
                ['_router', '_screen', 'Base64', '_screenParams','$stateParams', '$http', '$scope', 'lodash', 
                function(_router, _screen, Base64, _screenParams, $stateParams, $http, $scope, _){

        _screen.initialize($scope, _screenParams);
        $scope.items = [];
        $scope.searchQuery =  {
            value: ''
        }
        $scope.filteredItems = $scope.items;
        $scope.showSearch = typeof(_screenParams.showSearch) === 'undefined'? true : _screenParams.showSearch;

        var getServices = function() {
            var userName='mobile';
            var passWord='ulan';

            var authdata = Base64.encode(userName + ':' + passWord);

            console.log(authdata);
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $http.get('http://orchestraware.isc-bunkerramo.com/rest/services', { username: userName, password: passWord })
            .success(function (response) {
              $scope.items = response;
              $scope.filteredItems = $scope.items;
              console.log($scope.items);
            });
        };

        getServices();

        $scope.filterItems = function(searchQuery){
            var search = searchQuery.toLowerCase();
            $scope.filteredItems = _.filter($scope.items, function(item){
                return (item.name && item.name.toLowerCase().indexOf(search) != -1) ||
                    (item.detail_1 && item.detail_1.toLowerCase().indexOf(search) != -1) ||
                    (item.detail_2 && item.detail_2.toLowerCase().indexOf(search) != -1) ||
                    (item.url && item.url.toLowerCase().indexOf(search) != -1) ||
                    (item.desc && item.desc.toLowerCase().indexOf(search) != -1);
            });
        };

        $scope.cancelSearch = function(){
            $scope.searchQuery.value = "";
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

    }])

    .factory('Base64', function () {
        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      
        return {
            encode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;
      
                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);
      
                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;
      
                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }
      
                    output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                } while (i < input.length);
      
                return output;
            },
      
            decode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;
      
                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                var base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                    window.alert("There were invalid base64 characters in the input text.\n" +
                        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                        "Expect errors in decoding.");
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      
                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));
      
                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;
      
                    output = output + String.fromCharCode(chr1);
      
                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }
      
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
      
                } while (i < input.length);
      
                return output;
            }
        }
    });
