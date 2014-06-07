angular.module('podlearnApp')
.directive('dropZone', function() {
  return function(scope, element, attrs) {
    element.dropzone({ 
        url: "/upload-file",
        maxFilesize: 100,
        paramName: "uploadfile",
        maxThumbnailFilesize: 5,
        addRemoveLinks: true
    });
  }
});
