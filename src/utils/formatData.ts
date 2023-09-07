import { PaymentOption, Payments } from "../types";

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

export const getRegularPayment = (payments:any, count:number) => {
  if (typeof payments === 'object' && payments.hasOwnProperty('regularPayment')) {
    const regularOptions = payments.regularPayment.options;

    if (count === 0) return 0;

    const lastOption = regularOptions[regularOptions.length - 1];
    if (count >= lastOption.count) return lastOption.price;

    const selectedOption = regularOptions.find((option: any) => option.count === count);
    return selectedOption ? selectedOption.price : 0;
  } else {
    return 0;
  }
}

export const getPreSalePayment = (payments:Payments, count:number) => {
  if (typeof payments === 'object' && payments.hasOwnProperty('preSalePayment')) {
    const preSaleOptions = payments.preSalePayment.options;

    if (count === 0) return 0;

    const lastOption = preSaleOptions[preSaleOptions.length - 1];

    if (count >= lastOption.count) return lastOption.price;

    const selectedOption = preSaleOptions.find((option: PaymentOption) => option.count === count);
    return selectedOption ? selectedOption.price : 0;
  } else {
    return 0; 
  }
};