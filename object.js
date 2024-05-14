let obj = {};// declares an empty variable of type object.
obj[1] = 'One';// Assign the value 'One' to the property '1'
obj['1'] = 'String One';// the number key is Updated the string key

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);



//out put:


//string One
//string One
//true