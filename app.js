//define forEach, map, filter, reduce, concat

//difference between forEach and map is that forEach has a side effect 
//on the original arr/obj, while map returns a new arr without
//changing the original

//define forEach for arrays and objects
function forEach(anyObj, func) {
//check the anyObj is an array object or just an object
    if (anyObj.constructor === Array) {
        //traditional for loop is needed
        for (var i=0; i<anyObj.length; i++) {
            anyObj[i] = func(anyObj[i])
        }
    };
    else if (anyObj.constructor === Object) {
        //a for in loop is need
        for (var key in anyObj){
            anyObj[key] = func(anyObj[key])
        }
    };
//return the new mutated array or object
    return anyObj;
}

//define map for boths arrays and objects
function map(anyObj, func) {
//map returns an array, so a new internal array varaible has to be initialized
    var newArr = [];
//use the forEach function to iterate over each value in anyObj
//then push the result of the func on the value to newArr 
    forEach(anyObj, function(elem) {
        newArr.push(func(elem))
    });

//newArr has to be returned after the internal codes runs
    return newArr;
}

//define the filter function using forEach
function filter(anyObj, func) {
//filter takes a predicate and returns an array of values that are true 
    var newArr = [];
    
    forEach(anyObj, function(elem) {
        if (func(elem)) {
           newArr.push(elem)
        };
    })
//return newArr of true values
    return newArr;

}

//define reduce using forEach 
function reduce(anyObj, func, startvalue){
//reduce returns a single value from all in value in the original object
//initialize a total variable and set it to startvalue
    var total = startvalue
    
//use the forEach function to iterate over each element in anyObj
    forEach(anyObj, function(elem){
        total = func(total, elem)
    });

//return total after the code has run
    return total
}

//define concat..it takes two arrays and returns an array with all the values of both arrays
function concat(arr1, arr2){

//use forEach to push arr2 into arr1
    forEach(arr2, function(elem){ 
        arr1.push(elem);
    })
//return the concated array, which is now arr1
    return arr1
}