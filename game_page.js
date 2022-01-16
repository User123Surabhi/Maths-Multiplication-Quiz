player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");


player1_score = 0;
player2_score = 0;

var question_turn = "";
var answer_turn = "";

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

function send()
{

Number1=document.getElementById("Number1_input").value;
Number2=document.getElementById("Number2_input").value;
actual_answer=parseInt(Number1)*parseInt(Number2);
document.getElementById("Answer").value = actual_answer;
question_number="<h4>"+ Number1 + "X" + Number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='Answer'>";
check_button = "<br><br><button id='check' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("Number1_input").value="";
document.getElementById("Number2_input").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
get_answer = document.getElementById("Answer").value;


if(get_answer == actual_answer)
{

    if(answer_turn == "player1")
    {
        
        player1_score = player1_score+1;
        document.getElementById("player1_score").innerHTML  = player1_score;
       
    }
    else
    {
        
        player2_score = player2_score+1;
        document.getElementById("player2_score").innerHTML  = player2_score;
    }
}

if(question_turn == "player1")
{
    
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question turn -" + player2_name;
}
else
{
    
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question turn -" + player1_name;
}
if(answer_turn == "player1")
	{
        
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
        
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}
    //document.getElementById("output").innerHTML = "";
}
