var x=0;  
var pY=0,pX=0;
var gogo=1;


var mapa = {
 "px": [150,200,325,400,700,600,300,250,500,50,850],
 "py": [200,100,300,220,500,180,400,150,620,150,400],
    
}


  
function inicio(){  
  
  var mybox;
  var n=mapa["px"].length;
  if(document.getElementsByName("esferas").length>=n)
    return 
  mybox=document.getElementById("esferasbox");
  for(var i=0; i < n; i++){
      var itemp = document.createElement("img");
      itemp.src="images/esfera.jpg"
      itemp.name="esferas"
      itemp.id="esferas"
      mybox.appendChild(itemp);
  }
  mybox=document.getElementsByName("esferas");
  for(var x=0; x < mybox.length; x++)
  {
    mybox[x].style.position="absolute";
    mybox[x].style.left=mapa["px"][x]+"px";
    mybox[x].style.top=mapa["py"][x]+"px";
  }

}


  
window.onkeydown = mover;

function mover() {
  if(gogo){
   
  document.getElementById("cuestionario").style.display="none";  
  var keycode;    
  keycode = window.event.keyCode;  
  switch(keycode){
  case 37:
    //Left
    pX-=20;      
    break; 
  case 38:
    //Arriba    
    pY-=20;      
    break;
   case 39:
    //Derecha
    pX+=20;
    break;
   case 40: 
    //Abajo   
    pY+=20;    
    break;
    
  }
    document.getElementById("personaje").style.top=pY+"px";
    document.getElementById("personaje").style.left=pX+"px";
    verificar(); 
    
    
    
  }
  
}
    
function verificar(){
  for(cc=0;cc<mapa["px"].length;cc++){
      if(mapa["px"][cc] == pX && mapa["py"][cc] == pY ){
       gogo=0;
       myf(); 
      }
  }
}
    
function myf(){        
  document.getElementById("cuestionario").style.display="block";  
  enun=document.getElementById("enunciado");
  myradio=document.getElementsByName("pregunta");      
  alt=document.getElementsByName("demo");  
  myrpta=data[x+2]["answer"];
  enun.innerHTML="Pregunta:<br>"+data[x+2]["question"];
  alt[0].innerHTML=data[x+2]["alt"][0];
  alt[1].innerHTML=data[x+2]["alt"][1];
  alt[2].innerHTML=data[x+2]["alt"][2];    
  alt[3].innerHTML=data[x+2]["alt"][3];    
  alt[4].innerHTML=data[x+2]["alt"][4];    
    ++x;  
  
}
  
function validar(){  
  if(myradio[myrpta].checked){
    alert("Correcto") 
    document.getElementById("cuestionario").style.display="none";  
    gogo=1;
  }
  else
  {
    alert("lol")
    gogo=0;
  }
  
  
  }