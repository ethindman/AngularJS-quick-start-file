app.controller('MainController', ['$scope', function($scope) { 
  
  $scope.demos = [
    {
      title: "Hide",
      description: "Click the button to hide the text below",
      button: "Hide",
      myFunction: function hide() {
        alert("hide demo");
      }
    },
    {
      title: "Show",
      description: "Click the button to reveal a pretty picture",
      button: "Show",
      myFunction: function show() {
        alert("show demo");
      }
    },
    {
      title: "Toggle",
      description: "Click the button to toggle something",
      button: "Toggle",
      myFunction: function toggle() {
        alert("toggle demo");
      }
    },
    {
      title: "Slide Down",
      description: "Click the button to reveal an image via a slide down animation.",
      button: "Slide Down",
      myFunction: function slideDown() {
        alert("slideDown demo");
      }
    },
    {
      title: "Slide Toggle",
      description: "Click the button once to reveal an image with a sliding animation, and again to hide it.",
      button: "Slide Toggle",
      myFunction: function slideToggle() {
        alert("slideToggle Demo");
      }
    },
    {
      title: "Slide Up",
      description: "Click the button to make the image below disappear with a sliding animation",
      button: "Slide Up",
      myFunction: function slideUp() {
        alert("slideUp demo!");
      }
    }
  ];

  $scope.run = function() {
  	alert("worked!");
  };

}]);