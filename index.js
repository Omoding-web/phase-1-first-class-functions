//Function to receive a callback and calls it
function receivesAFunction(callback){
    callback();
}

//Function to return the named function
function returnsANamedFunction(){
    return function namedFunction(){
    return "I am a name function!";
};
}

//anonymous funtion return function
function returnsAnAnonymousFunction(){
    return function () {
        return "I am an anonymous function!";
};
}