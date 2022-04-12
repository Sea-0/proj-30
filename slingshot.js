class Slingshot{
    constructor(bodyA,pointB){
var options={
    bodyA:polygon,
    pointB:pointB,
    stiffness:0.4,
    length:30,
}
this.pointB=pointB
this.slingshot = Constraint.create(options);
World.add(world, this.slingshot);
}
fly(){
this.slingshot.bodyA=null
}
attach(body){
this.slingshot.bodyA=body
}
display(){
if(
this.slingshot.bodyA){
    var pointA = this.slingshot.bodyA.position
var pointB = this.pointB
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);
}



}}