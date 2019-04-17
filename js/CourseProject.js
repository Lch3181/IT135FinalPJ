//Load user functions for HTML
var width, height, rotation, alpha;

//user input check
$(document).ready
(
	function()
	{
		
		//user press a key
		$("input").keyup(function (e){inputHandler(e)});
		
		//user press a button
		$("span").click(function(e) {spanHandler(e)});
	}//end function calls
);//end ready

//change the image values base on user input
function inputHandler(e)
{
	//get user input values
	width = document.getElementById("width").value;
	height = document.getElementById("height").value;
	rotation = document.getElementById("rotation").value;
	var rotate = "rotate(" + rotation +"deg)";
	alpha = document.getElementById("alpha").value;
	var opacity = alpha * 0.01;
		
	//change image values base on user input
	$("#Non-animated").css("width", width);
	$("#Non-animated").css("height", height);
	$("#Non-animated").css("transform", rotate);
	$("#Non-animated").css("opacity", opacity);
	
}//end input handler

//animate the image base on user button click
function spanHandler(e)
{
	if(e.target.id == "IncWidth")
	{
		$("#Animated").animate({width: "+=50"}, 500);
	}//end if
	else if(e.target.id == "DecWidth")
	{
		$("#Animated").animate({width: "-=50"}, 500);
	}//end else if
	else if(e.target.id == "IncHeight")
	{
		$("#Animated").animate({height: "+=50"}, 500);
	}//end else if
	else if(e.target.id == "DecHeight")
	{
		$("#Animated").animate({height: "-=50"}, 500);
	}//end else if
	else if(e.target.id == "SpinL")
	{
		$("#Animated").animate({deg: "-=360"}, {duration:3600, step: function(now){
			$(this).css({
				transform: 'rotate(' + now + 'deg)'
			});
		}});
	}//end else if
	else if(e.target.id == "SpinR")
	{
		$("#Animated").animate({deg: "+=360"}, {duration:3600, step: function(now){
			$(this).css({
				transform: 'rotate(' + now + 'deg)'
			});
		}});
	}//end else if
	else if(e.target.id == "FadeIn")
	{
		$("#Animated").fadeIn(1000);
	}//end else if
	else if(e.target.id == "FadeOut")
	{
		$("#Animated").fadeOut(1000);
	}//end else if
	else if(e.target.id == "PrimeNumber")
	{
		$("#primeNumberOutput").empty();
		PrimeNumbers(100);
	}//end else if
}//end span handler

//function to print prime numbers
function PrimeNumbers(max)
{
	for (var i = 2; i <= max; i++) 
	{
    	var notPrime = false;
    	for (var j = 2; j < i; j++) 
    	{
        	if (i%j==0) 
        	{
            	notPrime = true;
        	}//end if
    	}//end for loop
    	if (notPrime === false) 
    	{
    		$("#primeNumberOutput").append(i+" ");
    	}//end if
	}//end for loop
}//end print prime number

//Validation
$(document).ready
(
	function()
	{
		var validationObj = $("#data").validate
		(
			//rules, messages, errors
			{
				rules:
				{
					width:{required:true, number:true, min:0},
					height:{required:true, number:true, min:0},
					rotation:{required:true, number:true},
					alpha:{required:true, number:true, range:[0,100]}
				},//end rules
				
				messages:
				{
					width:{min:"Possitive numbers only"},
					height:{min:"Possitive numbers only"},
					alpha:{range:"From 0 to 100 only"}
				},//end messages
				
				errorPlacement: function(error, element)
				{
					error.insertAfter(element);
				}//end error placement
			}
		);//end validation Obj
		
		validationObj.form();
		
	}//end function calls
);//end ready
