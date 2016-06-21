function SearchartistCtrl($scope, $stateParams, Spotify) {
  'ngInject';

  // Retrieve url query parameter
  $scope.query = $stateParams.q;

  // Set-up initial results objects
  $scope.artists = [];

  // Query to cache first
  Spotify.search($scope.query,'artist').then(function(data) {
    $scope.artists = data.artists.items;
  }); 
 
}

export default {
  name: 'SearchartistCtrl',
  fn: SearchartistCtrl
};
