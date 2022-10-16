const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let arrDuplicate = arr;

  for(let i = 0; i < arrDuplicate.length; i++) {
    if (arrDuplicate[i] === '--discard-next') {
      if(arrDuplicate[i+1]) {
        arrDuplicate.splice(i, 2);
        i--;
        // console.log(arrDuplicate)
      } else {arrDuplicate.splice(i, 1)}
    } else if (arrDuplicate[i] === '--discard-prev') {
      if (arrDuplicate[i-1]) {
        arrDuplicate.splice(i-1, 2);
        i = i - 2 ;
        // console.log(arrDuplicate)
      } else {
        arrDuplicate.splice(i, 1);
        i--
      }
    } else if (arrDuplicate[i] === '--double-next') {
      if (arrDuplicate[i+1]) {
        arrDuplicate.splice(i, 1, arrDuplicate[i+1])
        // console.log(arrDuplicate)
      } else {arrDuplicate.splice(i, 1);}
           
    } else if (arrDuplicate[i] === '--double-prev') {
      if (arrDuplicate[i-1]) {
        arrDuplicate.splice(i, 1, arrDuplicate[i-1])
      } else {
        arrDuplicate.splice(i, 1); 
        i--}
      
        // console.log(arrDuplicate)
    }
  };

  console.log(arrDuplicate);
  return arrDuplicate
  
}

module.exports = {
  transform
};
