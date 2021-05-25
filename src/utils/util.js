const pwdEqualCheck = (pwd1, pwd2) => {
  if (pwd1 !== pwd2) return false;
  else return true;
};

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { pwdEqualCheck, numberWithCommas };
