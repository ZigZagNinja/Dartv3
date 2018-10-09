//get canvas and context
let canvas = document.getElementById("dartcanvas");
let ctx = canvas.getContext("2d");

//canvas size 
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


//mouse
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})


//variables
let smallPoints1 = 301;
let smallPoints2 = 301;
let bigPoints1 = 0;
let bigPoints2 = 0;

//Display current points
//big
ctx.font = "60px Arial";
ctx.fillStyle = "black"
ctx.fillText(smallPoints1,235,300);
ctx.fillText(smallPoints2,635,300);

//small
ctx.font = "30px Arial";
ctx.fillStyle = "black"
ctx.fillText(bigPoints1,280,350);
ctx.fillText(bigPoints2,680,350);


//design
ctx.fillStyle = "darkred";
ctx.rect(0, 0, window.innerWidth, 150);
ctx.fill();


//choose between 501 and 301
let threeoneButton = new CanvasSubmit(canvas, {
	x: 0, 
	y: window.innerHeight-50,
	width: 100,
	height: 100,
	placeholder: '301',
	onSubmit: (function(){
		smallPoints1 = 301;
		smallPoints2 = 301;
		
		ctx.clearRect(150,200,600,200);
    	

	    	//Display current points
			//big
			ctx.font = "60px Arial";
			ctx.fillStyle = "black"
			ctx.fillText(smallPoints1,235,300);
			ctx.fillText(smallPoints2,635,300);

			//small
			ctx.font = "30px Arial";
			ctx.fillStyle = "black"
			ctx.fillText(bigPoints1,280,350);
			ctx.fillText(bigPoints2,680,350);
	})
})

let fiveoneButton = new CanvasSubmit(canvas, {
	x: window.innerWidth-100, 
	y: window.innerHeight-50,
	width: 100,
	height: 100,
	placeholder: '501',
	onSubmit: (function(){
		smallPoints1 = 501;
		smallPoints2 = 501;
		
		ctx.clearRect(150,200,600,200);
    	

	    	//Display current points
			//big
			ctx.font = "60px Arial";
			ctx.fillStyle = "black"
			ctx.fillText(smallPoints1,235,300);
			ctx.fillText(smallPoints2,635,300);

			//small
			ctx.font = "30px Arial";
			ctx.fillStyle = "black"
			ctx.fillText(bigPoints1,280,350);
			ctx.fillText(bigPoints2,680,350);
	})
})


//input
let input4player1 = new CanvasText( canvas, {
    x: 225,
    y: 450,
    width: 100,
    placeholder: 0
} );

//input
let input4player2 = new CanvasText( canvas, {
    x: 625,
    y: 450,
    width: 100,
    placeholder: 0
} );

let submitbutton = new CanvasSubmit( canvas, {
    x: 375,
    y: 450,
    width: 200,
    height: 25,
    placeholder: 'Submit',
    onSubmit: ( function() {

    	if(isNaN(input4player1.value) == false && isNaN(input4player2.value) == false && smallPoints1 - input4player1.value > -1  && smallPoints2 - input4player2.value > -1){
    		smallPoints1 = smallPoints1 -Number(input4player1.value)
    		smallPoints2 = smallPoints2 -Number(input4player2.value)

    		input4player1.value = "";
    		input4player2.value = "";

    		if(smallPoints1 === 0){bigPoints1++; ; smallPoints1 = 301; smallPoints2 = 301}
    		if(smallPoints2 === 0){bigPoints2++; ; smallPoints1 = 301; smallPoints2 = 301}


    		ctx.clearRect(150,200,600,200);
    	

	    	//Display current points
			//big
			ctx.font = "60px Arial";
			ctx.fillStyle = "black"
			ctx.fillText(smallPoints1,235,300);
			ctx.fillText(smallPoints2,635,300);

			//small
			ctx.font = "30px Arial";
			ctx.fillStyle = "black"
			ctx.fillText(bigPoints1,280,350);
			ctx.fillText(bigPoints2,680,350);
    	}
    } )
} );
