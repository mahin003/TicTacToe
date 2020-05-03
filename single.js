var human;
var com;
HumanMoves= document.getElementsByClassName("buttons");
document.getElementById("playerX").addEventListener('click',function(){
	  console.log("human Clicked");
       human ='X';
       com='O';
       document.getElementById("rule").style.display="none";
       document.getElementById("playButton").style.display="block";

});
document.getElementById("playerO").addEventListener('click',function(){
       console.log("human Clicked");
       human ='O';
       com='X';
       document.getElementById("rule").style.display="none";
       document.getElementById("playButton").style.display="block";

})



var k;

let turner;
var ar=[];
var HumanMoves=[];
var counter;

var board=[[],[],[]];
function initialize(){
	 for(var i=0;i<3;i++){
	 	for(var j=0;j<3;j++){
	 		board[i][j]='_';
	 	}
	 }
k=0;
turner=0;
 ar=[];
 
 counter=0;     
 
}

function play(){
	  
   for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='auto'; }
	initialize();
	console.log('clicked', human, com);
	 if(human=='X'){
	 	
	 
	 	humanTurn();
	 }
	 else if(human=='O'){
	 	
	 	turn();
	 }
	 document.getElementById("playButton").style.display='none';
}

function gamestatus(){
   //for X
   if(board[0][0]==human && board[0][1]==human && board[0][2]==human)
   { 
       document.getElementById('0').style.color="red";
       document.getElementById('1').style.color="red";
       document.getElementById('2').style.color="red";
   	   return 1;
   }
   if(board[1][0]==human && board[1][1]==human && board[1][2]==human)
   	  { 
       document.getElementById('3').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('5').style.color="red";
   	   return 1;
   } 
   if(board[2][0]==human && board[2][1]==human && board[2][2]==human)
   	  { 
       document.getElementById('6').style.color="red";
       document.getElementById('7').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 1;
   }
   if(board[0][0]==human && board[1][0]==human && board[2][0]==human)
   	  { 
       document.getElementById('0').style.color="red";
       document.getElementById('3').style.color="red";
       document.getElementById('6').style.color="red";
   	   return 1;
   }
   if(board[0][1]==human && board[1][1]==human && board[2][1]==human)
   	   { 
       document.getElementById('1').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('7').style.color="red";
   	   return 1;
   }
   if(board[0][2]==human && board[1][2]==human && board[2][2]==human)
   	   { 
       document.getElementById('2').style.color="red";
       document.getElementById('5').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 1;
   }
   if(board[0][0]==human && board[1][1]==human && board[2][2]==human)
   	  { 
       document.getElementById('0').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 1;
   }
   if(board[0][2]==human && board[1][1]==human && board[2][0]==human)
   	   { 
       document.getElementById('2').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('6').style.color="red";
   	   return 1;
   }

   //for O
   
   if(board[0][0]==com && board[0][1]==com && board[0][2]==com)
   	  { 
       document.getElementById('0').style.color="red";
       document.getElementById('1').style.color="red";
       document.getElementById('2').style.color="red";
   	   return 0;
   }
   if(board[1][0]==com && board[1][1]==com && board[1][2]==com)
   	  { 
       document.getElementById('3').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('5').style.color="red";
   	   return 0;
   } 
   if(board[2][0]==com && board[2][1]==com && board[2][2]==com)
   	 { 
       document.getElementById('6').style.color="red";
       document.getElementById('7').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 0;
   }
   if(board[0][0]==com && board[1][0]==com && board[2][0]==com)
   	  { 
       document.getElementById('0').style.color="red";
       document.getElementById('3').style.color="red";
       document.getElementById('6').style.color="red";
   	   return 0;
   }
   if(board[0][1]==com && board[1][1]==com && board[2][1]==com)
   	   { 
       document.getElementById('1').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('7').style.color="red";
   	   return 0;
   }
   if(board[0][2]==com && board[1][2]==com && board[2][2]==com)
   	   { 
       document.getElementById('2').style.color="red";
       document.getElementById('5').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 0;
   }
   if(board[0][0]==com && board[1][1]==com && board[2][2]==com)
   	   { 
       document.getElementById('0').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 0;
   }
   if(board[0][2]==com && board[1][1]==com && board[2][0]==com)
   	  { 
       document.getElementById('2').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('6').style.color="red";
   	   return 0;
   }	


}

function turn(){
	

     if(turner==0){
     	randomTurn();
        var x=ar[0];
        var y=ar[1];
        var buttonNo= (x*3)+y;
        buttonNo.toString(10);
        console.log(buttonNo)
        document.getElementById(buttonNo).innerHTML=com;
        board[x][y]=com;
        
	    
          turner=1;
          var result=gamestatus();
         setTimeout(function(){
         	
            if(result==0){
            	for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='none'; }


		     alert("YOU LOST TO A MACHINE");
		     document.getElementById("playButton").style.display="none";
		     document.getElementById("restart").style.display="block";
		     return;
	      }
	      else if(!moveLeft()){
	      	for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='none'; }
		alert("TIE!!!!");
		document.getElementById("restart").style.display='block';
		return;
	   }
         }, 50);
          
      if(!moveLeft()){return;}}
     if(turner==1){
     	turner=0;
     	humanTurn();
     	
     	
     }
     
     
}
function moveLeft(){
	var i, j;
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			if(board[i][j]=='_'){
				return true;
			}
		}
	}
	return false;
}

function humanTurn(){

	HumanMoves= document.getElementsByClassName("buttons");
	for (let i = 0; i < HumanMoves.length; i++) {
		console.log("sa");
  let button = HumanMoves[i];
  button.addEventListener('click',function(){
  	 var buttonNo=i;
        var x=buttonNo/3;
        var x=Math.floor(x);
        var y= buttonNo%3;
        



        buttonNo.toString(10);
        console.log(buttonNo);
        
        if(board[x][y]=='_'){
        	counter++;
	   
        document.getElementById(buttonNo).innerHTML=human;
        board[x][y]=human;
        var result=gamestatus();
        setTimeout(function(){
         	
            if(result==1){
            	for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='none'; }
            console.log("dis sd")	
		     alert("YOU WON!!!!");
		     document.getElementById("playButton").style.display="none";
		     document.getElementById("restart").style.display="block";
		     return;
	      }
	      else if(!moveLeft()){
		alert("TIE!!!!");
		for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='none'; }
		document.getElementById("restart").style.display='block';
		return;
	   }
         }, 50);

     
if(!moveLeft()){return;}
        turn();
          
    }
    
    
  });

}
	 
  

}
function randomTurn(){
      var x= Math.floor(Math.random() * 3);
      var y= Math.floor(Math.random() * 3);
      if(board[x][y]=='_'){
      ar[0]=x;
      ar[1]=y;
      return;
      }
      else{
      	randomTurn();
      }
}   




function reset(){
	console.log("clicked");
	initialize();
	
   document.getElementById("rule").style.display="block";

	for (let i = 0; i < 9; i++) {
		i.toString(10);
        document.getElementById(i).innerHTML='';
        document.getElementById(i).style.color='black';


   }

  

 document.getElementById("restart").style.display='none';

}