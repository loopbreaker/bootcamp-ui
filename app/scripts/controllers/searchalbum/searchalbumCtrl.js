function SearchalbumCtrl($scope, $stateParams, Spotify) {
  'ngInject';

  // Retrieve url query parameter
  $scope.query = $stateParams.q;

  // Set-up initial results objects
  $scope.albums = [];

  // Query to cache first
  Spotify.search($scope.query,'album').then(function(data) {
    $scope.albums = data.albums.items;
    console.log(data);
  }); 
 
}

export default {
  name: 'SearchalbumCtrl',
  fn: SearchalbumCtrl
};
