var name1=prompt("ENTER PLAYER 1 NAME");
var name2=prompt("ENTER PLAYER NAME 2");
document.getElementById("p1").innerHTML=name1;
document.getElementById("p2").innerHTML=name2;

var randomnumber=Math.floor(Math.random()*6)+1;
var dise="dice"+randomnumber+".png";
var source="images/"+dise;

var image=document.querySelectorAll("img")[0];
image.setAttribute("src",source);

var randomnumber1=Math.floor(Math.random()*6)+1;
var dise1="dice"+randomnumber1+".png";
var source1="images/"+dise1;

var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",source1);

if(randomnumber1>randomnumber){
  document.getElementById("bb").innerHTML=name2+ " wins!🚩";
}
else if(randomnumber1<randomnumber){
  document.getElementById("bb").innerHTML=name1+" wins!🚩";
}
else{
  document.getElementById("bb").innerHTML="Draw!";
}

