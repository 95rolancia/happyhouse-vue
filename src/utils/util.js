const pwdEqualCheck = (pwd1, pwd2) => {
  if (pwd1 !== pwd2) return false;
  else return true;
};

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

const checkPassword = (pwd) => {
  const passw = /(?=.*[A-Z]).{6,20}$/;
  if (pwd.match(passw)) {
    return true;
  } else {
    return false;
  }
};

export { pwdEqualCheck, numberWithCommas, getRandomInt, checkPassword };
