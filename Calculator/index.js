function display(val){
    document.getElementById("result").value += val;
    return val;
}

function backSpace(){
    let x = document.getElementById("result").value;
    let y = x.slice(0, x.length - 1);
     
    let z = document.getElementById("result").value = y;
    return z;
}

function solve(){
 let x = document.getElementById("result").value 
 let y = eval(x);
 document.getElementById("result").value = y;

 return y;
}

function clearScreen(){
  let n = document.getElementById("result").value = " ";

  return n;
}