var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class player{
    constructor(pos_x, pos_y, radius, color){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.radius = radius;
        this.color = color;
    }
    draw()
    {
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius, 0, 2*Math.PI );
        context.fillStyle = this.color;
        context.fill();
    
    }
}
var char_player = new player(100,100,20,'skyblue');
char_player.draw();

class bullet{
    constructor(pos_x, pos_y, width, height, color){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw()
    {
        context.beginPath();
        context.fillStyle = this.color;
        context.fill();
    }
}
var char_bullet = new bullet(10,10,100,100,'red');
char_bullet.draw();
canvas.onclick = (event) => {
    const x = event.clientX - context.canvas.offsetLeft; 
    const y = event.clientY - context.canvas.offsetTop;
    context.fillRect(x-15, y-15, 30, 30);
}

