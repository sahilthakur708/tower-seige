class Rectangle1{
    constructor(x,y,width,height){
        var options={
            restitution:0.6,
            friction:0.8,
            density:0.6
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        x=x
        y=y
        this.width=width
        this.height=height
        World.add(world,this.body)
}
display(){
   push()
   fill("yellow")
   rect(x,y,width,height)
   pop()
}
}