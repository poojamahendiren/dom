var first=document.createlabel("label","for","first","firstname");
var b1=linebreak("br");
var inputfirst=inputfield("input","type","text","id","first");
var b2=linebreak("br");
var last=document.createlabel("label","for","last","lastname");
var b3=linebreak("br");
var inputlast=inputfield("input","type","text","id","last");
var b4=linebreak("br");
var email=document.createlabel("label","for","email","Email");
var b5=linebreak("br");
var inputemail=inputfield("input","type","email","id","email");
var b6=linebreak("br");
var numb=document.createlabel("label","for","numb","Phonenumber");
var b7=linebreak("br");
var inputnumb=inputfield("input","type","number","id","numb");
var b8=linebreak("br");
document.body.append(first,b1,inputfirst,b2,last,b3,inputlast,b4,email,b5,inputemail,b6,numb,b7,inputnumb,b8);


function createlabel(tagname,attrname,attrvalue,content){
    var label=document.createElement(tagname);
    label.setAttribute(attrname,attrvalue);
    label.innerHTML=content;
    return label;
}
function inputfield(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var label=document.createElement(tagname);
    input.setAttribute(attrname,attrvalue);
    input.setAttribute(attrname1,attrvalue1);
    return input;
}
function linebreak(breaker){
    var b=document.createElement(breaker);
    return b;
}

