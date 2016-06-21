function SearchallCtrl($scope, $stateParams, Spotify) {
  'ngInject';

  // Retrieve url query parameter
  $scope.query = $stateParams.q;

  // Set-up initial results objects
  $scope.artists = [];
  $scope.albums = [];
  $scope.songs = [];

  // Set-up config
  $scope.limitCount = 4;

  if ($scope.query) {

    Spotify.search($scope.query,'artist').then(function(data) {
      $scope.artists = data.artists.items;
    }); 

    Spotify.search($scope.query,'album').then(function(data) {
      $scope.albums = data.albums.items;
    });

    Spotify.search($scope.query,'track').then(function(data) {
      $scope.songs = data.tracks.items;
    });
  }
 
}

export default {
  name: 'SearchallCtrl',
  fn: SearchallCtrl
};
