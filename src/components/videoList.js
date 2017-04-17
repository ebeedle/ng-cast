angular.module('video-player')

.controller('videoListCtrl', function() {
	this.videos = window.exampleVideoData
})

.directive('videoList', function() {
  return {
  	scope: {},
  	restrict: 'E',
    controller: 'videoListCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoList.html'
  };
});
