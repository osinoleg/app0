
var elapsedTime;
var counter;

function beginTimer()
{
	elapsedTime = 0;
	counter = setInterval(timer, 1000); //1000 will run it every 1 second
}

function timer()
{
	if(document.getElementById("timer") == null)
	{
		elapsedTime = 0;
		clearInterval(counter);
		return;
	}

	elapsedTime += 1;
	if(false) // insert condition here
	{
		clearInterval(counter);
     	//counter ended, do something here
     	return;
 	}

	document.getElementById("timer").innerHTML=elapsedTime + " secs";
}

function startTimer(url)
{
	console.log("lol");
	$.post( url, function( response ) {
	    console.log( "test" + response ); // server response
	    $("#yield").html(response);
	    beginTimer();
	});
}


function stopTimer(url)
{
	console.log("lol_stop");
	$.post( url, function( response ) {
	    console.log( "test" + response ); // server response
	    $("#yield").html(response);
	});
}

