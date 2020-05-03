var playerX;
var ai;
HumanMoves= document.getElementsByClassName("buttons");
document.getElementById('X').addEventListener('click',function(){
     playerX="X";
     ai="O";
     document.getElementById("choseXorO").style.display="none";
} );
document.getElementById('O').addEventListener('click',function(){
     playerX="O";
     ai="X";
     document.getElementById("choseXorO").style.display="none";
} );



var board=[[],[],[]];
function initialisze(){
	 for(var i=0;i<3;i++){
	 	for(var j=0;j<3;j++){
	 		board[i][j]='_';
	 	}
	 }

     
}


var row, col;
    

function evaluate(){
      var i, j;
      for( i=0;i<3;i++){
      	 if(board[i][0]==board[i][1] && board[i][1]==board[i][2]){
      	 	 if(board[i][0]==ai){
      	 	 	return 10;
      	 	 }
      	 	 else if(board[i][0]==playerX){
      	 	 	return -10;
      	 	 }
      	 }
      }

      for( i=0;i<3;i++){
      	 if(board[0][i]==board[1][i] && board[1][i]==board[2][i]){
      	 	 if(board[0][i]==ai){
      	 	 	return 10;
      	 	 }
      	 	 else if(board[0][i]==playerX){
      	 	 	return -10;
      	 	 }
      	 }
      }
      if(board[0][0]==board[1][1] && board[1][1]==board[2][2]){
      	  if(board[0][0]==ai){
      	 	 	return 10;
      	 	 }
      	 	 else if(board[0][0]==playerX){
      	 	 	return -10;
      	 	 }
      }

      if(board[0][2]==board[1][1] && board[1][1]==board[2][0]){
      	  if(board[1][1]==ai){
      	 	 	return 10;
      	 	 }
      	 	 else if(board[1][1]==playerX){
      	 	 	return -10;
      	 	 }
      }

      return 0;

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
function minmax(isMax){
	var score= evaluate();
	if(score!=0){
		return score;
	}

	if(!moveLeft()){
		return 0;
	}

	if(!isMax){
		var best=100;
		for(var i=0;i<3;i++){
			for(var j=0;j<3;j++){
				if(board[i][j]=='_'){
                    board[i][j]=playerX;
                    best=Math.min(best,minmax(true));
                    board[i][j]="_";

				}
			}
		}
		return best;

	}
else if(isMax){
	 	var best=-100;
		for(var i=0;i<3;i++){
			for(var j=0;j<3;j++){
				if(board[i][j]=='_'){
                    board[i][j]=ai;
                    best=Math.max(best,minmax(false));
                    board[i][j]="_";

				}
			}
		}
		return best;

	}
}	



function AIturn(){
    var i, j,bestScore=-10000;

	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			if(board[i][j]=='_'){
				board[i][j]=ai;
				//ai hoile true else false
				var MovingScore= minmax(false);
				board[i][j]='_';
				console.log(MovingScore);
				if(MovingScore>bestScore){
					console.log(i,j);
					row=i;
					col=j;
					bestScore=MovingScore;
				}


			}
		}
	}
	var buttonNo= (row*3)+col;
        buttonNo.toString(10);
        document.getElementById(buttonNo).innerHTML=ai;
        board[row][col]=ai;
       
        var result= gamestatus();
        setTimeout(function(){
         	
            if(result==1){
            	for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='none'; }
		     alert("AI WON!! as expected");
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
         }, 100);
        
        if(!moveLeft()){return;}
        Humanturn();
}   



function play(){
	for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='auto'; }
	initialisze();
	
    if(playerX=="X"){
    	Humanturn();
    }
    else{
    	AIturn();
    }
    document.getElementById("playButton").style.display="none";

}
function Humanturn(){
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
         
            document.getElementById(buttonNo).innerHTML=playerX;
             board[x][y]=playerX;

             var result= gamestatus();
            setTimeout(function(){
         	
            if(result==0){

            for (let i = 0; i < HumanMoves.length; i++) {
  let button = HumanMoves[i];
  button.style.pointerEvents='none'; }	
		     alert("YOU won!!");
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
         }, 100);

           if(!moveLeft()){return;}
            AIturn();
         
      }


    });
  }


 }       

 function reset(){
 	console.log("clicked");
 	initialisze();
 	playerX='';
 	ai='';
    
   for (let i = 0; i < 9; i++) {
		i.toString(10);
        document.getElementById(i).innerHTML='';
        document.getElementById(i).style.color='black';


   }

  

 document.getElementById("restart").style.display='none';
 	document.getElementById("choseXorO").style.display="block";
 	document.getElementById("playButton").style.display="block";
 }

 function gamestatus(){
   //for X
   if(board[0][0]==ai && board[0][1]==ai && board[0][2]==ai)
   { 
       document.getElementById('0').style.color="red";
       document.getElementById('1').style.color="red";
       document.getElementById('2').style.color="red";
   	   return 1;
   }
   if(board[1][0]==ai && board[1][1]==ai && board[1][2]==ai)
   	  { 
       document.getElementById('3').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('5').style.color="red";
   	   return 1;
   } 
   if(board[2][0]==ai && board[2][1]==ai && board[2][2]==ai)
   	  { 
       document.getElementById('6').style.color="red";
       document.getElementById('7').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 1;
   }
   if(board[0][0]==ai && board[1][0]==ai && board[2][0]==ai)
   	  { 
       document.getElementById('0').style.color="red";
       document.getElementById('3').style.color="red";
       document.getElementById('6').style.color="red";
   	   return 1;
   }
   if(board[0][1]==ai && board[1][1]==ai && board[2][1]==ai)
   	   { 
       document.getElementById('1').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('7').style.color="red";
   	   return 1;
   }
   if(board[0][2]==ai && board[1][2]==ai&& board[2][2]==ai)
   	   { 
       document.getElementById('2').style.color="red";
       document.getElementById('5').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 1;
   }
   if(board[0][0]==ai && board[1][1]==ai && board[2][2]==ai)
   	  { 
       document.getElementById('0').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 1;
   }
   if(board[0][2]==ai && board[1][1]==ai && board[2][0]==ai)
   	   { 
       document.getElementById('2').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('6').style.color="red";
   	   return 1;
   }

   //for O
   
   if(board[0][0]==playerX && board[0][1]==playerX && board[0][2]==playerX)
   	  { 
       document.getElementById('0').style.color="red";
       document.getElementById('1').style.color="red";
       document.getElementById('2').style.color="red";
   	   return 0;
   }
   if(board[1][0]==playerX && board[1][1]==playerX && board[1][2]==playerX)
   	  { 
       document.getElementById('3').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('5').style.color="red";
   	   return 0;
   } 
   if(board[2][0]==playerX && board[2][1]==playerX && board[2][2]==playerX)
   	 { 
       document.getElementById('6').style.color="red";
       document.getElementById('7').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 0;
   }
   if(board[0][0]==playerX && board[1][0]==playerX && board[2][0]==playerX)
   	  { 
       document.getElementById('0').style.color="red";
       document.getElementById('3').style.color="red";
       document.getElementById('6').style.color="red";
   	   return 0;
   }
   if(board[0][1]==playerX && board[1][1]==playerX && board[2][1]==playerX)
   	   { 
       document.getElementById('1').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('7').style.color="red";
   	   return 0;
   }
   if(board[0][2]==playerX && board[1][2]==playerX && board[2][2]==playerX)
   	   { 
       document.getElementById('2').style.color="red";
       document.getElementById('5').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 0;
   }
   if(board[0][0]==playerX && board[1][1]==playerX && board[2][2]==playerX)
   	   { 
       document.getElementById('0').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('8').style.color="red";
   	   return 0;
   }
   if(board[0][2]==playerX && board[1][1]==playerX && board[2][0]==playerX)
   	  { 
       document.getElementById('2').style.color="red";
       document.getElementById('4').style.color="red";
       document.getElementById('6').style.color="red";
   	   return 0;
   }	


}