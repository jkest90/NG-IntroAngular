angular.module('angularIntro',[]);

angular.module('angularIntro').controller('alpha', ['$scope', alphaCtrl] );

function alphaCtrl($scope) {
     $scope.greeting = 'No one tried to say a thing \
     when they took him out in jest.\
     Except, of course, the little neighbor boy, \
     who carried him to rest. \
     And he just walked along, alone, \
     With his guilt so well concealed.'

    $scope.buttonClick = function() {
        console.log("Frankie Lee & Judas Priest");
        $scope.subGreeting = "Nothing is revealed.";
    }
}

angular.module('angularIntro').controller('beta', [betaCtrl] );

function betaCtrl() {
    var bCtrl = this;
   
    bCtrl.parOne = "This is text in paragraph one.";
    
    bCtrl.hover = function() {                           //declares a function named 'hover'
        bCtrl.paragraphColor = { 'color': 'pink' };     //declares a property named paragraphColor with a value of an object -'color:pink'.
    };
    
    bCtrl.exclaim = '!'
}