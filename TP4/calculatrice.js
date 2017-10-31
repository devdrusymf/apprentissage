


//var operateur = prompt('Quelle opération voulez-vous ?');
//var nombre1 = parseInt(prompt('Nombre 1'));
//var nombre2 = parseInt(prompt('Nombre 2'));



var chiffre = document.getElementsByClassName('chiffre');
var operateur = document.getElementsByClassName('operateur');
var nombre1, nombre2, op, tab = [];

//console.log(chiffre);

for (i= 0; i<chiffre.length; i++) {

    chiffre[i].addEventListener('click', function (e){
        
        tab.push(e.target.value); 
        //§alert('nombre 2');
    });

}


for (i= 0; i<operateur.length; i++) {
    
    operateur[i].addEventListener('click', function (e){
        
        tab.push(e.target.value); 

    });
}
  


function Addition(nb1, nb2)
{
    return console.log(nb1+nb2);
}

function Soustration(nb1, nb2)
{
    var resultat = (nb1 > nb2) ? nb1 - nb2 : nb2 - nb1;
    return console.log(resultat);
}

function Multilication(nb1, nb2)
{
    return console.log(nb1*nb2);
}

function Division(nb1, nb2)
{

    if(nb1 == 0 || nb2 == 0 )
    {
        return console.log('La division par zéro est impossible');
    }

    return console.log(nb1/nb2);
}

console.log(tab);

/*
var chaine = 'chaine de caractère';
    //chaine.an

switch (operateur) {
    case '+':
        Addition();
        //console.log(nombre1+nombre2)
        break;
    case '-':
        //Soustration();
        //console.log(nombre1-nombre2)
        break;
    case '*':
        //Multilication();
        //console.log(nombre1*nombre2)
        break;
    case '/':
        //Division();
        //console.log(nombre1 / nombre2)
        break;
    default:
        console.log('opération inconnue');
        break;
}
*/