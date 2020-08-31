import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const first = Big(numberOne || 0);
  const second = Big(numberTwo || 0);
  let result = 0;
  switch (operation) {
    case '+':
      result = first.plus(second);
      break;
    case '-':
      result = first.minus(second);
      break;
    case 'x':
      result = first.times(second);
      break;
    case '÷':
      try {
        result = first.div(second);
      } catch (error) {
        result = Big(0);
      }
      break;
    case '%':
      result = first.times(second.div(100));
      break;
    default:
      result = 0;
  }
  return result.toString();
};

export default operate;
