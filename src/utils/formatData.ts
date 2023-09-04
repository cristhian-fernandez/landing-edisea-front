export const formatPayment = (num: Number) => {
    const roundedNum = parseFloat(num.toFixed(2));
    const numAsString = roundedNum.toString();
  
    if (numAsString.indexOf('.') === -1) {
      return numAsString + '.00';
    }

    const parts = numAsString.split('.');
    if (parts[1].length === 1) {
      return numAsString + '0';
    }
  
    return numAsString;
}