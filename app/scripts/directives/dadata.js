angular
  .module('projectApp')
  .directive('dadata',   [function () {
    function link (scope, element) {
      $(element).suggestions({
        serviceUrl: 'https://dadata.ru/api/v2',
        token: '4737ca70ef9c9afd4dc238dd9a32322ef467faf6',
        type: scope.type.toUpperCase(),
        onSelect: function(suggestion) {
          scope.data = suggestion.data;
          scope.$apply();
        }
      });
    }
    return {
      restrict: 'A',
      link: link,
      scope: {
        type: '@ddtType',
        data: '=ddtModel'
      }
    };
  }]);
