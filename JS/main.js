document.write (2E310);//infinity
document.write (-3E310);//negative -infinity

document.write(10>2);//Boolean Logic true
document.write(10<2);//Boolean Logic false

console.log(2 + 2);//console.log() Method: Result of math operation the answer is 4 in console
document.write("10"+5);//Type Coercion would return 105

document.write(10==10);// Double Equal Signs true 
document.write(10==11);// Double Equal Signs false

x=10;
y=10;
document.write(x===y);//Triple Equal Signs true 

x=82;
y="82";
document.write(x===y);//Triple Equal Signs false


A="Magnus";
B="Magnus";
document.write(A===B);//Triple Equal Signs true

A="Omega";
B="Alfa";
document.write(A===B);//Triple Equal Signs false

document.write(5>2 && 10>4 );// Boolean logical operators "AND"
document.write(5>10 && 10>4 );

document.write(5>10 || 10>4);//Boolean logical operation "OR"
document.write(5>10 || 10>20);

function not_function() {
    document.getElementByIdd("Not").innerHTML=!(20 > 10);//this is Not Operador,this woul return true

}

function not_Fuction() {
    document.getElementById("Not").innerHTML = ! (20 > 10);//Not Operator:this wpuld return False
}

document.write(typeof "Word");







function my_Function() {
    document.getElementById("Test").innerHTML = isNaN("this is a string");
}//Not a number Infinity NaN ("Not a Number")

