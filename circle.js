class Circle{
    constructor(x,y,r){
        var options={
            restitution:0.6,
            friction:1,
            density:0.3
        }
        this.body=Bodies.circle(x,y,r,options)
        x=x
        y=y
        r=radius
       World.add(world,this.body)

}
display(){
    push()
   fill("yellow")
    circle(x,y,r)
    pop()
}
}