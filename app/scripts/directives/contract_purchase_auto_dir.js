angular.module("projectApp")
  .directive("formsPerson", function () {
    return {
      link: function (scope, element, attributes) {
        scope.data = scope[attributes["formsPerson"]];
      },
      restrict: "A",
      // адрес внешнего файла с шаблоном
      templateUrl: "../views/templates/formsPerson.html"
    }
  })
