alert('Hello Akhil Masih');

function submitAnswers(){
	var total=5;
	var score=0;
	//Get user input
	var q1=document.forms["quizForm"]["q1"].value;
	var q2=document.forms["quizForm"]["q2"].value;
	var q3=document.forms["quizForm"]["q3"].value;
	var q4=document.forms["quizForm"]["q4"].value;
	var q5=document.forms["quizForm"]["q5"].value;
	//validation
	for(var i=1;i<=total;i++)
	if(eval('q'+i)==null ||eval('q'+i)==''){
		alert('You Missed Question '+i);
		return false;
	}
	//set Correct answers

	var answer = ["a","b","c","d","d"];
	for(var i=1;i<=total;i++)
	if(eval('q'+i)==answer[i-1]) {score++};
	var results=document.getElementById('result');
	results.innerHTML='<h3>You Scored <span>'+score+' </span> out of 5 </h3>';
	

	

	return false;
}