"use strict";
var $ = function(id) { 
    return document.getElementById(id); 
};
function getNumber(num){
    var a = $('input');
    switch(num){
        case 1: a.value += '1';
                break;
        case 2: a.value += '2';
                break;
        case 3: a.value += '3';
                break;        
        case 4: a.value += '4';
                break;
        case 5: a.value += '5';
                break;
        case 6: a.value += '6';
                break;
        case 7: a.value += '7';
                break;
        case 8: a.value += '8';
                break;
        case 9: a.value += '9';
                break;
        case 0: a.value += '0';
                break;
    }
}
function clearScreen(){
    $('input').value = "";
    $('output').value = "";
}
function getOperand(o){
        var a = $('input');
        switch(o){
                case '+': a.value += '+';
                          break;
                case '-': a.value += '-';
                          break;
                case 'x': a.value += '*';
                          break;
                case '/': a.value += '/';
                          break;
                case '+/-': a.value += '-' + a.value;
                          break;
        }
}
function backspace(){
        var a = $('input');
        var x = a.value;
        if(x.length > 0){
                x = x.substring(0,x.length-1);
                a.value = x;
        }
}
function compute(){
        var a = $('input');
        var ans = eval(a.value);
        $('output').value = ' ' + ans;
}
var i = 0;
function brackets(){
        var a = $('input');
        if(i == 0){
                a.value += '(';
                i = 1;
        }
        else if(i==1){
                a.value += ')';
                i = 0; 
        }
}
function pi(){
    var a = $('input');
    a.value += Math.PI;
}
function sin(){
    var a = $('input');
    var ans = Math.sin(a.value * Math.PI / 180);
    $('output').value = '' + ans;
}
function cos(){
        var a = $('input');
        var ans = Math.cos(a.value * Math.PI / 180);
        $('output').value = '' + ans;
}
function tan(){
        var a = $('input');
        var ans = Math.tan(a.value * Math.PI / 180);
        $('output').value = '' + ans;
}
function ln(){
        var a = $('input');
        var ans = Math.log(a.value);
        $('output').value = '' + ans;
}
function squrt(){
        var a = $('input');
        var ans = Math.sqrt(a.value);
        $('output').value = '' + ans;
}
function sqr(){
        var a = $('input');
        var ans = Math.pow(a.value,2);
        $('output').value = '' + ans;
}
function expo(){
        var a = $('input');
        var ans = Math.exp(a.value);
        $('output').value = '' + ans;
}
function per(){
        var a = $('input');
        var ans = a.value/100;
        $('output').value = '' + ans;
}