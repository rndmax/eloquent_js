let s = '', size = 10;
for(let h = 0; h < size; h++){
  for(let w = 0; w < size; w++){
    if((h + w) % 2 === 0) {
      s+='#';
    } else {
      s+=' ';
    }
  }
  s+='\n';
}
console.log(s);