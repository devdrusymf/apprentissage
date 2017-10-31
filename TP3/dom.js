/*var prenom = document.getElementById('prenom');
var nom = document.getElementById('nom')
var valider = document.getElementById('valider');
var resultat = document.getElementById('resultat');



  

    valider.addEventListener('click', function (e){
       
        //alert('click sur le bouton');

        var nom_prenom = prenom.value + ' ' + nom.value;
        console.log(e);
        resultat.value = nom_prenom;
   });
*/
/*
 utilisation de jquery

*/

$(function() {

    $('#valider').on('click', function(){
        var prenom = $('#prenom').val() // recupère la valeur du cahmp input
        var nom = $('#nom').val();
        $('#resultat').val(prenom + ' ' + nom);
    });

});