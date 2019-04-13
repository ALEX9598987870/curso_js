function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function div(a, b){
    return a / b;
}

function multi(a, b){
    return a * b;
}

function all(a, b){
    console.log(`add: ${add(a, b)}, sub: ${sub(a, b)}, div: ${div(a, b)}, multi: ${multi(a, b)}`); 
}


console.log(`add: ${add(1,2)}`);

console.log(`sub: ${sub(2,1)}`);

console.log(`div: ${div(8,2)}`);

console.log(`mult: ${multi(10,2)}`);

all(2,6);
