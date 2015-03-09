app.controller('MainController', ['$scope', function($scope) { 
  
  $scope.demos = [
    {
      title: "You can change everything here!",
      description: "To do so, go to js>controllers>MainController.js and edit the data and functions there!",
      button: "FadeOut",
      myFunction: function fadeOut() {
       $('h1').fadeOut();
      }
    },
    {
      title: "You can change everything here!",
      description: "To do so, go to js>controllers>MainController.js and edit the data and functions there!",
      button: "FadeIn",
      myFunction: function fadeIn() {
        $('h1').fadeIn();
      }
    },
    {
      title: "You can change everything here!",
      description: "To do so, go to js>controllers>MainController.js and edit the data and functions there!",
      button: "Change CSS property",
      myFunction: function addClass() {
        $('div.demo').removeClass('grey');
        $('div.demo').addClass('red');
      }
    },
    {
      title: "You can change everything here!",
      description: "To do so, go to js>controllers>MainController.js and edit the data and functions there!",
      button: "Alert",
      myFunction: function alertSomething() {
        alert("working!");
      }
    },
    {
      title: "You can change everything here!",
      description: "To do so, go to js>controllers>MainController.js and edit the data and functions there!",
      button: "Toggle",
      myFunction: function toggle() {
        $('p').toggle();
      }
    },
    {
      title: "You can change everything here!",
      description: "To do so, go to js>controllers>MainController.js and edit the data and functions there!",
      button: "Remove Class",
      myFunction: function removeClass() {
        $('div.demo').removeClass('red');
        $('div.demo').addClass('grey');
      }
    }
  ];

  $scope.run = function() {
  	alert("worked!");
  };

}]);