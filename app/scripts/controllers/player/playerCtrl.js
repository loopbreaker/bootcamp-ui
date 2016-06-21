function PlayerCtrl(Spotify) {
	'ngInject';

	// ViewModel
	const vm = this;

	vm.isPlaying = false;

	vm.isPaused = function() {
		return !vm.isPlaying;
	}

	vm.play = function() {
		vm.audio.play();
		vm.isPlaying = true;
	}

	vm.pause = function() {
		vm.audio.pause();
		vm.isPlaying = false;
	}
	
	Spotify.getTrack('3iyjOwyySLRDEW2tqP7MhX').then(function(data) {
		vm.audio = new Audio(data.preview_url);
		vm.audio.volume = 1;
	});

}

export default {
  name: 'PlayerCtrl',
  fn: PlayerCtrl
};
