var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');  

let imageA = "hanawi.png";
let imageB = "kibokura.jpg";
let txtclr = document.getElementById('txtclr');
let xps = document.getElementById('x_pos');
let yps = document.getElementById('y_pos');
let txts = document.getElementById('txt_s');

let image = new Image();

let selectBox = document.getElementById('type');
selectBox.addEventListener('change', function(event) {
    switch(event.currentTarget.value) {
        case 'lmsg':
            imagea = new Image();
            imagea.addEventListener("load",function (){
                canvas.width = imagea.naturalWidth;
                canvas.height = imagea.naturalHeight;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(imagea, 0, 0);
            });
            image.src = imageA;
        case 'chw':
            imageb = new Image();
            imageb.addEventListener("load",function (){
                canvas.width = imageb.naturalWidth;
                canvas.height = imageb.naturalHeight;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(imageb, 0, 0);
            });
            imageb.src = imageB;
    }
});

    image = new Image();
        image.addEventListener("load",function (){
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0);
        });
        image.src = imageA;

function drawText()
{
const text = document.getElementById('text__');
ctx.font = txts.value + 'px sans-serif';
ctx.fillStyle = txtclr.value;
ctx.textBaseline = 'center';
ctx.textAlign = 'left';
var x = xps.value;
var y = yps.value;
ctx.fillText(text.value, x, y);
}

function clearS() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
