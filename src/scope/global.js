//variables

var a; // declarando
var b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignación
var a = 'aa'; //redeclaración

//Global scope

/* Cualquier variable que se encuentre en el documento
son globalesy se instancian en el objeto window */

var fruit = 'apple'; //global
console.log(fruit)//apple

function bestFruit(){
    console.log(fruit);
}

bestFruit();//apple

//cuando no declaramos una variable, pasa a ser global automaticamente


function coutries(){
    contry='Colombia'
    console.log(contry)
}

coutries() // colombia
console.log(contry) // ccolombia
