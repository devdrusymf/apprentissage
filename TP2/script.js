var operateur = prompt('Quelle opération voulez-vous ?');
var nombre1 = parseInt(prompt('Nombre 1'));
var nombre2 = parseInt(prompt('Nombre 2'));

function Addition()
{
    return console.log(nombre1+nombre2);
}

function Soustration()
{
    var resultat = (nombre1 > nombre2) ? nombre1 - nombre2 : nombre2 - nombre1;
    return console.log(resultat);
}

function Multilication()
{
    return console.log(nombre1*nombre2);
}

function Division()
{

    if(nombre1 == 0 || nombre2 == 0 )
    {
        return console.log('La division par zéro est impossible');
    }

    return console.log(nombre1/nombre2);
}

var chaine = 'chaine de caractère';
    chaine

switch (operateur) {
    case '+':
        Addition();
        //console.log(nombre1+nombre2)
        break;
    case '-':
        Soustration();
        //console.log(nombre1-nombre2)
        break;
    case '*':
        Multilication();
        //console.log(nombre1*nombre2)
        break;
    case '/':
        Division();
        //console.log(nombre1 / nombre2)
        break;
    default:
        console.log('opération inconnue');
        break;
}




