function HomeCtrl($state) {
	'ngInject';

	// ViewModel
	const vm = this;
	vm.searchInput = '';

  vm.search = function() {
    $state.go('home.searchAll', {q: vm.searchInput});
  }
}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
