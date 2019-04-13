const array = [2, 3, 4];

function findItemInArray(array, str) {
  let arr = array.find(item => item === str);
  if 
    (arr != null) console.log(arr);
  else 
    console.log("error!");
}

findItemInArray(array, 5);

newArray = array.map(item => item * item);

console.log(newArray);

//2.4 - Desenvolva uma função que receba um array por parâmetro e um valor,
//procure esse valor no array, se existir, printe ele e sua posição no array, se não, uma mensagem de erro

//2.5 - Desenvolva uma função que receba um array de números por parâmetro e retorne um novo array com todos os itens ao quadrado
