module.exports = {
    test: function()
    {
        console.log("Called!");
        return "Test";
    },
    sum: function(num1, num2){
        return num1 + num2;
    },
    subtract: function(num1, num2){
        return num1 - num2;
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
    divide: function(num1, num2){
        // check if user tries to divide by zer
        // show an error on the console
        // return 0
        // else perform division

        if(num2 == 0){
            console.log("Error, you should not divide by zero");
            return 0;
        }
        else{
            return num1 / num2;
        }
    },
    //Exercise (Assignment 1): Return smaller of 2 numbers
    smaller: function (num1, num2){
        if(num1 < num2) return num1;
        return num2;
    },
    //Exercise (Assignment 1): Return larger of 2 numbers
    greater: function(num1, num2){
        if(num1 > num2) return num1;
        return num2;
    },
    //Exercise (Assignment 1): Is a number even?
    isEven: function(num) {
       if(num % 2 == 0)
        return "even";
        return "odd";
    },
};