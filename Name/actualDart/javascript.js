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
ctx.font = "50px Arial";
ctx.fillStyle = "black"
ctx.fillText(smallPoints1,210,350);
ctx.fillText(smallPoints2,610,350);

//small
ctx.font = "20px Arial";
ctx.fillStyle = "black"
ctx.fillText(bigPoints1,245,400);
ctx.fillText(bigPoints2,645,400);;


//design
ctx.fillStyle = "darkred";
ctx.rect(0, 0, window.innerWidth, 150);
ctx.fill();


//choose between 501 and 301
let threeoneButton = new CanvasSubmit(canvas, {
	x: 0, 
	y: window.innerHeight-100,
	width: 100,
	height: 100,
	placeholder: '301',
	onSubmit: (function(){
		smallPoints1 = 301;
		smallPoints2 = 301;
	})
})

let fiveoneButton = new CanvasSubmit(canvas, {
	x: window.innerWidth-100, 
	y: window.innerHeight-100,
	width: 100,
	height: 100,
	placeholder: '501',
	onSubmit: (function(){
		smallPoints1 = 501;
		smallPoints2 = 501;
	})
})


//input
let input4player1 = new CanvasText( canvas, {
    x: 200,
    y: 500,
    width: 100,
    placeholder: 0
} );

//input
let input4player2 = new CanvasText( canvas, {
    x: 600,
    y: 500,
    width: 100,
    placeholder: 0
} );

let submitbutton = new CanvasSubmit( canvas, {
    x: 775,
    y: 700,
    width: 300,
    height: 50,
    placeholder: 'Submit',
    onSubmit: ( function() {

    	if(isNaN(input4player1.value) == false && isNaN(input4player2.value) == false && smallPoints1 - input4player1.value > -1  && smallPoints2 - input4player2.value > -1){
    		smallPoints1 = smallPoints1 -Number(input4player1.value)
    		smallPoints2 = smallPoints2 -Number(input4player2.value)

    		input4player1.value = "";
    		input4player2.value = "";

    		if(smallPoints1 === 0){bigPoints1++; ; smallPoints1 = 301; smallPoints2 = 301}
    		if(smallPoints2 === 0){bigPoints2++; ; smallPoints1 = 301; smallPoints2 = 301}


    		ctx.clearRect(500,175,860,300);

	    	//Display current points
			//big
			ctx.font = "50px Arial";
			ctx.fillStyle = "black"
			ctx.fillText(smallPoints1,window.innerWidth/2-450,800);
			ctx.fillText(smallPoints2,window.innerWidth/2+200,800);

	    	ctx.font = "20px Arial";
			ctx.fillStyle = "black"
			ctx.fillText(bigPoints1,window.innerWidth/2-390,1000);
			ctx.fillText(bigPoints2,window.innerWidth/2+260,1000);
    	}
    } )
} );
