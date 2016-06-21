function SearchsongCtrl($scope, $stateParams, Spotify) {
  'ngInject';

  // Retrieve url query parameter
  $scope.query = $stateParams.q;

  // Set-up initial results objects
  $scope.songs = [];

  // Query to cache first
  Spotify.search($scope.query,'track').then(function(data) {
    $scope.songs = data.tracks.items;
  }); 
 
}

export default {
  name: 'SearchsongCtrl',
  fn: SearchsongCtrl
};
