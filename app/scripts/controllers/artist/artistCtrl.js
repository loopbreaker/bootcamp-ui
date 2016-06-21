function ArtistCtrl($scope, $stateParams, Spotify) {
  'ngInject';

  // Retrieve url query parameter
  $scope.id = $stateParams.id;

  // Set-up initial results objects
  $scope.name = '';
  $scope.imgurl = '';
  $scope.albums = [];

  Spotify.getArtist($scope.id).then(function(data) {
    $scope.name = data.name;

    // set cover img
    // Put wildcard image!
    $scope.imgurl = (!data.images.length) ? 'none' : data.images[1].url;
  }); 

  Spotify.getArtistAlbums($scope.id).then(function(data) {
     $scope.albums = data.items;

  }); 
 
}

export default {
  name: 'ArtistCtrl',
  fn: ArtistCtrl
};
