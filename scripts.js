// 
function arrayMadness(a) {

    let squaredA = [];

    for (let i = 0; i < a.length; i++) {

        squaredA.push(Math.pow(a[i], 2));

        return squaredA;
    }
  }

  console.log(arrayMadness([4,5,6]));