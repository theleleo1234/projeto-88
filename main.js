var canvas = new fabric.canvas("mycanvas");
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
fuction load_img(){
    fabric.image.fromURL("golf-h.png", fuction(img) {
        hole_obj = img;
        hole_obj.scaletowidth(50);
        hole_obj.scaletoheight(50);
        hole_obj.set( {
            top:hole_y,
            left:hole_x
        });
canvas.add(holeobj);
});
new_image();
fuction new_image()
{ 
fabric.image.fromURL("golf-h.png", fuction(img) {
    hole_obj = img;
    hole_obj.scaletowidth(50);
    hole_obj.scaletoheight(50);
    hole_obj.set( {
        top:hole_y,
        left:hole_x
    });
canvas.add(holeobj);
}); 
}
if((ball_x==hole_x)&&(ball_y)){
    canvas.remove(ball_obj);
document.getElementById("hd3").innerHTML="você atingiu o objetivo";
document.getElementById("mycanvas").style.bordercolor="red";
function down()
   {
    ball_y = ball_y + block_image_height;
    console.log("altura da imagem do bloco t = " + block_image_height);
    console.log("quando a tecla direcional baixo é precionada, x "+ ball_x + ", y = "+ball_y )
    canvas.remove(ball_obj);
    new_image();
   }
}                  