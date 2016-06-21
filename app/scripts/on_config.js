function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'controllers/home/home.html',
    title: 'Spotify Angular App'
  })
  .state('home.searchAll', {
    url: 'all?{q}',
    controller: 'SearchallCtrl as searchall',
    templateUrl: 'controllers/searchall/searchall.html'
  })
  .state('home.searchArtists', {
    url: 'artists?{q}',
    controller: 'SearchartistCtrl as searchartist',
    templateUrl: 'controllers/searchartist/searchartist.html'
  })
  .state('home.searchAlbums', {
    url: 'albums?{q}',
    controller: 'SearchalbumCtrl as searchalbum',
    templateUrl: 'controllers/searchalbum/searchalbum.html'
  })
  .state('home.searchSongs', {
    url: 'songs?{q}',
    controller: 'SearchsongCtrl as searchsong',
    templateUrl: 'controllers/searchsong/searchsong.html'
  })
  .state('home.selectedArtist', {
    url: 'artist?{id}',
    controller: 'ArtistCtrl as artist',
    templateUrl: 'controllers/artist/artist.html'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
