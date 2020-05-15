const canvas = document.querySelector(`.canvas__drawing`);
const context = canvas.getContext(`2d`);

const startDrawing = evt => {
	isDrawing = true;
	
	context.beginPath();
	
	context.moveTo(evt.pageX - canvas.offsetLeft, evt.pageY - canvas.offsetTop);
};

const draw = evt => {
	if (isDrawing) {
		var x = evt.pageX - canvas.offsetLeft;
		var y = evt.pageY - canvas.offsetTop;
		
		context.lineTo(x, y);
		context.stroke();
	}
};

const stopDrawing = () => {
    isDrawing = false;	
};

const clearCanvas = () => {
	context.clearRect(0, 0, canvas.width, canvas.height);
};

canvas.onmousedown = startDrawing;
canvas.onmousemove = draw;
canvas.onmouseup = stopDrawing;
canvas.onmouseout = stopDrawing;
document.querySelector(`.canvas__btn`).onmousedown = clearCanvas;
