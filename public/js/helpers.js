
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

function graphTimers(graphData)
{
	
	//Get context with jQuery - using jQuery's .get() method.

	var total_duration = 0;
	for(var i = 0; i < graphData.length; i++)
	{
		total_duration += graphData[i];
	}

	var doughnutData = [];
	console.log("tutal dur: " + total_duration);
	var test = 0;
	var red = 10;
	for(var i = 0; i < graphData.length; i++)
	{
		// console.log(graphData[i]);	
		var val = graphData[i] / total_duration;
		val *= 360;
		console.log("dur " + graphData[i] + " = " + val + "%");
		test += val;

		var colorStr = "rgb(" + red + ", 100, 100)";
		red+=2;
		doughnutData.push({value: val, color:colorStr});
		console.log(colorStr);
	}

	console.log("FINAL = " + test);

	// var doughnutData = [
	// 			{
	// 				value: 30,
	// 				color:"#F7464A"
	// 			},
	// 			{
	// 				value : 50,
	// 				color : "#46BFBD"
	// 			},
	// 			{
	// 				value : 100,
	// 				color : "#FDB45C"
	// 			},
	// 			{
	// 				value : 40,
	// 				color : "#949FB1"
	// 			},
	// 			{
	// 				value : 120,
	// 				color : "#4D5360"
	// 			}
			
	// 		];

	var myDoughnut = new Chart(document.getElementById("graph").getContext("2d")).Doughnut(doughnutData);
}

