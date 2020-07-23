import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const operations = ['+', '-', 'x', '÷', '%'];

  if (operations.includes(buttonName)) {
    operation = buttonName;
    total = (total !== null && next !== null) ? operate(total, next, operation) : total || next;
  } else if (buttonName === '=' && total && next) {
    total = operation ? operate(total, next, operation) : total = next;
    operation = null;
  } else if (buttonName === 'AC') {
    total = null;
  } else if (buttonName === '+/-') {
    total = (total || next) * -1;
  }
  next = null;
  return { total, next, operation };
};

export default calculate;