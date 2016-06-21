const AlbumBrief = {
    templateUrl: 'components/albumbrief/albumbrief.html',
	controller: function(Spotify){
    'ngInject';

    var ctrl = this;

    ctrl.$onInit = function() {

      Spotify.getAlbum(this.id).then(function(data) {

      // get album title
      ctrl.title = data.name;

      // set artist names
      // check whether the album has several artists or not
      if (data.artists instanceof Array) {
        let artists = [];
        let count = data.artists.length;

        for (var i = 0; i < count; i++) {
          artists.push(data.artists[i].name)
        }  
        ctrl.artists = artists.join(', ');
      } else {
        ctrl.artist = data.artists;
      }

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
  name: 'albumBrief',
  object: AlbumBrief
};