function HotkeysCtrl ($scope, hotkeys) {
  $scope.volume = 5;

  $scope.dataset = [
    {'name': 'master', 'type': 'Branch'},
    {'name': 'autocomplete-demo', 'type': 'Branch'},
    {'name': 'hotfix-custom-template', 'type': 'Branch'},
    {'name': 'production', 'type': 'Server'},
    {'name': 'staging', 'type': 'Server'}
  ];

  hotkeys.add({
    combo: 'command+up',
    description: 'Increase volume',
    callback: function() {
      if ($scope.volume < 10) {
        $scope.volume += 1;
      }
    }
  });

  hotkeys.add({
    combo: 'command+down',
    description: 'Decrease volume',
    callback: function() {
      if ($scope.volume > 0) {
        $scope.volume -= 1;
      }
    }
  });

  hotkeys.add({
    combo: '/',
    description: 'Activate search',
    callback: function(event, hotkey) {
      event.preventDefault();
      angular.element("#searchBox").focus();
    }
  });
}

var hotkeysApp = angular.module('hotkeysApp', ['cfp.hotkeys', 'ui.bootstrap']);

hotkeysApp.controller('HotkeysCtrl', HotkeysCtrl);
