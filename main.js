x="";
y="";
var trans="";
//draw_circle="";
//draw_rectangle="";
var reco=window.webkitSpeechRecognition;
var reco2= new reco();

function start() {
    document.getElementById("status").innerHTML="App started";
    reco2.start();
}

reco2.onresult=function(event){
    console.log(event);
    trans=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognized as " + trans;
    if (trans=="circle") {   
      x=Math.floor(Math.random()*900);
      y=Math.floor(Math.random()*600);
    }
    if (trans=="rectangle") {
      l=Math.floor(Math.random()*100);
      b=Math.floor(Math.random()*50);
    }
}

function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
if (trans=="circle") {
    radius=Math.floor(Math.random()*100);
    circle(x,y,radius);
    document.getElementById("status"),innerHTML="circle is drawn";
    trans=" ";
}
if (trans=="rectangle") {
    rect(x,y,l,b);
    document.getElementById("status"),innerHTML="rectangle is drawn";
    trans=" ";
}

}
