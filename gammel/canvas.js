let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth+50;
canvas.height = window.innerHeight+50;
let colours =['#f581ee','#81def8','#81f5d6','#47a8ab'];

function randomIntFromRange(min,max) {
    let z = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log(z)
    return z
}

function Ball(x,y,dx,dy,radius,color){
    this.x =x;
    this.y = y;
    dx = dx;
    dy = dy;
    this.radius = radius;
    this.color = color;

    this.update= function(index, time){
        this.dx *= index;
        this.x = (Math.sin(dx+time/10000)*1000) ;
        this.dy *= index+time;
        this.y = (Math.sin(dy+time/10000)*1000) ;
        //console.log(dx)
        this.draw();
    }

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
        grd = ctx.createRadialGradient(this.x,this.y,this.radius,this.x,this.y,this.radius/2) 
        grd.addColorStop(0, "rgba(32, 161, 230,0)");
        grd.addColorStop(1, this.color);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.closePath();
    }

}
let ballArray = [];
for(let i = 0; i < 200; i++){
    let x = randomIntFromRange(0,canvas.width)
    let y = randomIntFromRange(0,canvas.height)
    ballArray.push(new Ball(x,y, randomIntFromRange(0,canvas.width),randomIntFromRange(100,canvas.height),randomIntFromRange(10,500), colours[randomIntFromRange(0,colours.length-1)]));
}

var start = null;
function animate(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    //console.log(progress)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < ballArray.length; i++) {
        ballArray[i].update(i, progress);
    }
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
