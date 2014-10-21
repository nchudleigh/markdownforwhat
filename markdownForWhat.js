(function(window, document, location, navigator, $, angular, undefined) {
    'use strict';

    angular.module('markdownForWhat',[])

    .directive('markdownForWhat', function() {
        var md = function () {
            marked.setOptions({
                gfm:true,
                sanitize:true,
                smartypants:true,
                smartLists:true,
                pedantic:false,
                breaks:true,
                tables:false
            });

            var toHtml = function (markdown) {
                if (markdown == undefined)
                    return '';

                return marked(markdown);
            };
            
            return {
                toHtml:toHtml
            };
        }();
        return {
            restrict : 'E',
            scope: {
                content: '=',
            },
            link: function(scope, element, attrs){
                scope.$watch('content', function(newVal, oldVal){
                    var html = md.toHtml(scope.content);
                    element.html(html);
                });
            }
        };

        
    })
;}(window, document, location, navigator, $, angular, undefined));
