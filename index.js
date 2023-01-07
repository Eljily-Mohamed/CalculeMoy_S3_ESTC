(function(){  
    var app = angular.module('myApp',[]);
    
    app.controller('myController',function($scope){
      
      $scope.Mods = [
        {
          nom: 'Réseaux Informatiques ',
          matieres: [
            {
              nom: 'Laboratoires Cisco(CCNA2)',
              note: 10,
              cofe:5.5
              },
            {
              nom: 'Réseaux Haut Débit et Protocoles',
              note: 10,
              cofe:4.5
              }
          ],
          coeff: 1,
          moyenne:0
        },
        {
          nom: 'Administration systèmes, réseaux et BD',
          matieres: [
            {
              nom: 'ASRL',
              note: 10,
              cofe:4
              },
             { 
              nom: ' ASRWS',
              note: 10,
              cofe:4
              },
            {
              nom: 'DBA',
              note: 10,
              cofe:2
              }
            
          ],
          coeff: 1,
          moyenne:0
        },
        {
          nom: 'Analyse, Conception et POO',
          matieres: [
            {
              nom: 'UML',
              note: 10,
              cofe:4
              },
            {
              nom: 'Programmation Orientée Objet',
              note: 10,
              cofe:6
              }
          ],
          coeff: 1,
          moyenne:0
        },
        {
          nom: 'TEC et Culture d’Entreprise ',
          matieres: [
            {
              nom: 'Communication – Mltimédia II',
              note: 10,
              cofe:1.5
              },
            {
              nom: 'Culture d’Entreprise',
              note: 10,
              cofe:2.25
              },
            { 
              nom: 'TEC',
              note:10,
              cofe:2
            },
            {
              nom: 'Anglais',
              note: 10,
              cofe:2
              },
            {
              nom: 'Droit',
              note: 10,
              cofe:2.25
              }
          ],
          coeff: 1,
          moyenne:0
        }
      ];
      
      
      $scope.moy = function(){
        var total = 0;
        for (var i = 0; i < $scope.Mods.length; i++){
          for (var j = 0; j<$scope.Mods[i].matieres.length;j++){
            total += Number($scope.Mods[i].matieres[j].note * $scope.Mods[i].matieres[j].cofe);
          }
          var average = total/10;        
          $scope.Mods[i].moyenne = average;
          return average;
        }
      };//end method
      
      //$scope.moyenne();
      $scope.moyenne = function(obj){
        var total = 0;
        for (var i = 0; i < obj.matieres.length; i++){
          total += Number(obj.matieres[i].note * obj.matieres[i].cofe);
        }
        var average = total/10       
        obj.moyenne = average;
        return average;
      };
      
      //general average
      $scope.moyGen = function(obj){
        var total = 0, coeffs = 0;
        for (var i = 0; i < obj.length; i++){
          total += (obj[i].moyenne * obj[i].coeff);
          coeffs += obj[i].coeff;
        }
        var genAvg = total/coeffs;
        return genAvg;
      };
      
      
    });//end controller
    
  })();//end global closure