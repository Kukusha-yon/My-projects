function clearscreen(){
    document.getElementById('result').value = "";
}
function display(value){
    document.getElementById('result').value += value;
}
function calculate(){
    var p = document.getElementById('result').value;
    var q = eval(p);
    document.getElementById('result').value = q;
}
function del(){
    let num = document.getElementById('result');
    let str = num.tostring();
    num = str.slice(0,-1);
}