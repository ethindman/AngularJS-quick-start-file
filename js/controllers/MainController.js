app.controller('MainController', ['$scope', function($scope) { 
  
  $scope.demos = [
    {
      title: "This is an example title",
      description: "To change the contents in these boxes, go to js>controllers>MainController.js and edit the data there.",
      button: "Name your button",
      myFunction: function hide() {
        alert("This function is currently alerts this message, but you can change it to whatever you want.");
      }
    },
    {
      title: "This is an example title",
      description: "Put in your custom description here",
      button: "Name your button",
      myFunction: function hide() {
        alert("This function is currently alerts this message, but you can change it to whatever you want.");
      }
    },
    {
      title: "This is an example title",
      description: "Put in your custom description here",
      button: "Name your button",
      myFunction: function hide() {
        alert("This function is currently alerts this message, but you can change it to whatever you want.");
      }
    },
    {
      title: "This is an example title",
      description: "Put in your custom description here",
      button: "Name your button",
      myFunction: function hide() {
        alert("This function is currently alerts this message, but you can change it to whatever you want.");
      }
    },
    {
      title: "This is an example title",
      description: "Put in your custom description here",
      button: "Name your button",
      myFunction: function hide() {
        alert("This function is currently alerts this message, but you can change it to whatever you want.");
      }
    },
    {
      title: "This is an example title",
      description: "Put in your custom description here",
      button: "Name your button",
      myFunction: function hide() {
        alert("This function is currently alerts this message, but you can change it to whatever you want.");
      }
    }
  ];

  $scope.run = function() {
  	alert("worked!");
  };

}]);