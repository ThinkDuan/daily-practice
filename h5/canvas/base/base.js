var canvasOne = document.querySelector("#canvasOne");
var ctxCanvasOne = canvasOne.getContext("2d");
/**
 * fillRect(起点坐标x,起点坐标y,矩形长度,矩形宽度)
 */
ctxCanvasOne.fillStyle = "#ff0000";
ctxCanvasOne.fillRect(75,75,150,150);
/**
 * 画线
 * 1. moveTo(起点坐标x,起点坐标y)  定义线条开始坐标
 * 2. lineTo(结束坐标x,结束坐标y)   定义线条结束坐标
 * 3. stroke()  绘制线条
 */
ctxCanvasOne.moveTo(0,0);
ctxCanvasOne.lineTo(200,200);
ctxCanvasOne.lineWidth = 10;
ctxCanvasOne.stroke();
/**
 * 画圆
 * 1. arc(x,y,r,start,stop)
 */
ctxCanvasOne.beginPath();
ctxCanvasOne.lineWidth = 1;
ctxCanvasOne.arc(95,50,40,0,2*Math.PI);
ctxCanvasOne.arc(95,50,30,0,2*Math.PI);
ctxCanvasOne.arc(95,50,20,0,2*Math.PI);
ctxCanvasOne.stroke();

ctxCanvasOne.beginPath();
ctxCanvasOne.lineTo(400,400);
ctxCanvasOne.quadraticCurveTo(400,700,700,400);
ctxCanvasOne.stroke();

ctxCanvasOne.beginPath();
ctxCanvasOne.moveTo(20,200);
ctxCanvasOne.arcTo(100,200,100,400,40);
ctxCanvasOne.lineTo(100,400);
ctxCanvasOne.stroke()