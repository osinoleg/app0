
var elapsedTime;
var counter;

function beginTimer()
{
	elapsedTime = 0;
	counter = setInterval(timer, 1000); //1000 will run it every 1 second
}

function timer()
{
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
	$.post( url, function( response ) {
	    console.log( url ); // server response
	    // render timer info
	});
}