const SongBrief = {
    templateUrl: 'components/songbrief/songbrief.html',
	controller: function(Spotify){
    'ngInject';

    var ctrl = this;

    ctrl.$onInit = function() {

      Spotify.getTrack(this.id).then(function(data) {

      // get song name
      ctrl.name = data.name;

      // check whether the song has several artists or not
      if (data.artists instanceof Array) {
        let artists = [];
        let count = data.artists.length;

        for (var i = 0; i < count; i++) {
          artists.push(data.artists[i].name)
        }  
        ctrl.artists = artists.join(', ');
      } else {
        ctrl.artists = data.artists;
      }

      // get track's album
      ctrl.album = data.album.name;

      // get track length
      ctrl.duration = data.duration_ms;
      });

    };
  },
  bindings: {
    id: '@'
  }
};

export default {
  name: 'songBrief',
  object: SongBrief
};