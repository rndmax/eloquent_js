function isEven(a) {
  if (a === 0) return true;
  else if (a === 1) return false;
  else if (a < 0) return isEven(a + 2); // author isEven(-n);
  else return isEven(a - 2);
}