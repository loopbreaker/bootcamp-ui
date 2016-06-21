const ArtistBrief = {
    templateUrl: 'components/artistbrief/artistbrief.html',
	controller: function(Spotify){
    'ngInject';

    var ctrl = this;

    ctrl.$onInit = function() {

      Spotify.getArtist(this.id).then(function(data) {

      // get artist name
      ctrl.name = data.name;

      // set cover img
      // Put wildcard image!
      ctrl.imgurl = (!data.images.length) ? 'none' : data.images[1].url;
      });

    };
  },
  bindings: {
    id: '@'
  }
};

export default {
  name: 'artistBrief',
  object: ArtistBrief
};