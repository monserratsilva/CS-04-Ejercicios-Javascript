function calculateSumAndProduct(arr) {
    let sum = 0;
    let product = 1;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      product *= arr[i];
    }
  
    console.log("El sumatorio es " + sum);
    console.log("El producto es " + product);
  }
  
  const numbers = [1, 2, 3, 4];
  calculateSumAndProduct(numbers);