function addnumbers(a,b){
 if ((typeof(a) === 'number') && ( typeof(b) === 'number')){
  return a + b
  }
  else{
    return "some data is not number"
  }
}

module.exports = addnumbers;


var alma = 5;

console.log(typeof(alma));
