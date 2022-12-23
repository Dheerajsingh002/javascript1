var canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var gl=canvas.getContext('webgl');
if(!gl){
    console.error("Unable to initialize WebGL.");
}
var time=0.0;