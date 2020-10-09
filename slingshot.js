class SlingShot{
    constructor(body1,point1){
        var options={
            bodyA:body1,
        pointA:point1,
        stiffness:0.05,
        length:0.5
        }
        this.body=Matter.Constraint.create(options)
       World.add(world,this.body)
    }
    display(){
        if(this.body.bodyA){
            var pointA=this.body.bodyA.position
            var pointB=this.body.pointB
            strokeWeight(4)
            //line(pointA.x,pointA.y,pointB.x,pointB.y)
            push()
            stroke(48,22,8)
            strokeWeight(6)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop()
        }
}

fly(){
    this.body.bodyA=null
}
}
