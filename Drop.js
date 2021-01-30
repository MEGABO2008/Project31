class Drop{

constructor(x,y,r){
         var options = {
         'restitution':0,
         'friction':0.1,
         'density':0
         }
this.body = Bodies.elispe(x,y,r);
this.x = x;
this.y = y;
this.r= r;
World.add(world, this.body);
}

display(){
super.display();
    var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
elispeMode(RADIUS);
elispe(0,PI/2);
pop();
var maxDrops=100;
for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400),random(0,400)));
}
if(this.rain.position.y>height){
MediaStreamTrackEvent.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});

}




}
}