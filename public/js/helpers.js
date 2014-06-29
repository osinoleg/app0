
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

function graphTimers()
{
	//Get context with jQuery - using jQuery's .get() method.
	var doughnutData = [
				{
					value: 30,
					color:"#F7464A"
				},
				{
					value : 50,
					color : "#46BFBD"
				},
				{
					value : 100,
					color : "#FDB45C"
				},
				{
					value : 40,
					color : "#949FB1"
				},
				{
					value : 120,
					color : "#4D5360"
				}
			
			];

	var myDoughnut = new Chart(document.getElementById("graph").getContext("2d")).Doughnut(doughnutData);
}

