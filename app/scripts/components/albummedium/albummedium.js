const AlbumMedium = {
    templateUrl: 'components/albummedium/albummedium.html',
	controller: function(Spotify){
    'ngInject';

    var ctrl = this;

    ctrl.$onInit = function() {

      Spotify.getAlbum(this.id).then(function(data) {

      // get album title
      ctrl.title = data.name;
      // get songs count
      ctrl.songs = data.tracks.items.length;
      //get release date
      ctrl.release = data.release_date;

      // set cover img
      // Put wildcard image!
      ctrl.imgurl = (!data.images.length) ? 'none' : data.images[0].url;
      });

    };
  },
  bindings: {
    id: '@'
  }
};

export default {
  name: 'albumMedium',
  object: AlbumMedium
};