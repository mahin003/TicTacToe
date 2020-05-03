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
 HumanMoves=[];
 counter=0;     
 
}
var playerX="X";
var playerO="O";
var human='X';
var com='O';
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

function play(){
for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='auto'; }

   initialize();
   document.getElementById("playButton").style.display='none';
HumanMoves= document.getElementsByClassName("buttons");
	for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.addEventListener('click',function(){
  	 var buttonNo=i;
        var x=buttonNo/3;
        var x=Math.floor(x);
        var y= buttonNo%3;
        
        buttonNo.toString(10);
        console.log(buttonNo);
        console.log(x,y);
        if(board[x][y]=='_' ){
          if(k==0){
            document.getElementById(buttonNo).innerHTML=playerX;
             board[x][y]=playerX;
             var result=gamestatus();
         setTimeout(function(){
          
            if(result==1){
         alert("PLAYER X won!!!!");
         for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='none'; }
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
         }, 200);
              

             k=1;
          }
         else if(k==1){
            document.getElementById(buttonNo).innerHTML=playerO;
             board[x][y]=playerO;
             var result=gamestatus();
         setTimeout(function(){
          
            if(result==0){
         alert("PLAYER 'O' WONN!!");
         for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='none'; }
         document.getElementById("playButton").style.display="none";
         document.getElementById("restart").style.display="block";
         return;
        }
        else if(!moveLeft()){
    alert("TIE!!!!");
    document.getElementById("restart").style.display='block';
    return;
     }
         }, 200);

if(!moveLeft()){return;}

             k=0;
          }
        
      }


    });
  }
 }       

 function reset(){
  initialize();
  document.getElementById("playButton").style.display='block';
  document.getElementById("restart").style.display='none';
  HumanMoves= document.getElementsByClassName("buttons");
  for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='none'; }

  for (let i = 0; i < 9; i++) {
    i.toString(10);
        document.getElementById(i).innerHTML='';
       
        document.getElementById(i).style.color='black';


   }

 }