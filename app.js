

// imports
var myMath = require('./myMath'); 


function test(){
    var name = "YOUR NAME";
    var age = 34;

    console.log(name);

    if(age<60){
        console.log("You are still young!");
    }
    else {
        console.log("Sorry, you are getting old");
    }

    // print number from 3 to 12, except the 7
    for(let i = 3; i<13; i++){
        if(i !=7){
            console.log(i);
        }
    }

    //arrays
    var names = [];
    names.push('Luis');
    names.push('Kenny');
    names.push('Letty');
    names.push('Ebbonai');
    names.push('Desir');

    console.log(names);

    //print the names in reverse order
    for(let j = names.length - 1 ; j >=0; j--) {

        console.log(names[j]);

    }
}

function init() {
    console.log("Hello NodeJS");

  //  test();

  myMath.test();

  var res = myMath.sum(21, 21);
  console.log("Sum: " + res);

  var bad = myMath.divide(1,0);
  console.log("Bad: " + bad);

  var good = myMath.divide(123,3);
  console.log("Good: " + good);  

    var g1 = myMath.greater(34,2);
    console.log(g1); // 78

    var g2 = myMath.smaller(50,200);
    console.log(g2); //200

    var even = myMath.isEven(264);
    console.log(even); // True

    var odd = myMath.isEven(777);
    console.log(odd); // False

}

function calculateTaxes(){

//

}






init();