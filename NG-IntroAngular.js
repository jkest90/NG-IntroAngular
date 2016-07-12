angular.module('angularIntro',[]);

angular.module('angularIntro').controller('alpha', ['$scope', alphaCtrl] );

function alphaCtrl($scope) {
     $scope.greeting = 'No one tried to say a thing. \
     when they took him out in jest.\
     Except, of course, the little neighbor boy, \
     who carried him to rest. \
     And he just walked along, alone, \
     With his guilt so well concealed.'

    $scope.buttonClick = function() {
        console.log("Hi I've been clicked");
        $scope.subGreeting = "Nothing is revealed.";
    }
}