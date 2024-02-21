
function myfunction(){
    var x=5;
    if(x==5){
        let y=10;
        console.log(y);
    }
    console.log(x);
    //Q: difference between var and let
    //A: var is function scoped and let is block scoped
    //Q:What do you mean by function scoped and block scoped?
    //A: function scoped means that the variable is accessible within the function in which it is declared
    //block scoped means that the variable is accessible within the block in which it is declared
}

function displayDate(){
    var d = new Date();
    //get element by id
    document.getElementById("date").innerHTML = d;
}

myfunction();