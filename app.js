
//Buttons
let recbtn = document.getElementById('recbtn')
let sqbtn = document.getElementById('sqbtn')
let cirbtn = document.getElementById('cirbtn')
let tribtn = document.getElementById('tribtn')

//Shape Values
let sqvalue = document.getElementById('square')
let recWidth = document.getElementById('width')
let recHeight = document.getElementById('height')
let triHeight = document.getElementById('triangle')
let cirRadius = document.getElementById('circle')

//Container
let container = document.getElementById('container')

//Shape Info
let shapeName = document.getElementById('shape-name')
let shapeWidth = document.getElementById('info-width')
let shapeHeight = document.getElementById('info-height')
let shapeRadius = document.getElementById('info-radius')
let shapeArea = document.getElementById('info-area')
let shapePerimeter = document.getElementById('info-perimeter')

//EventListeners
recbtn.addEventListener('click',insertRectangle)
function insertRectangle(){
    new Rectangle()
}

sqbtn.addEventListener('click',insertSquare)
function insertSquare(){
    new Square()
}

cirbtn.addEventListener('click',insertCircle)
function insertCircle(){
    new Circle()
}

tribtn.addEventListener('click',insertTriangle)
function insertTriangle(){
    new Triangle()

}

//Random Number
class Shape{
    constructor(width,height,sideLength,radius,name){
        this.width = recWidth.value;
        this.height = recHeight.value;
        this.sideLength= sqvalue.value;
        this.tri_Height = triHeight.value; 
        this.radius = cirRadius.value;
        this.name=name
        this.div=document.createElement('div');
        container.appendChild(this.div)       
    }
    describe(){
        shapeName.innerHTML=this.name
        shapeWidth.innerHTML=this.width
        shapeHeight.innerHTML=this.height
        let ranNumber = Math.floor(Math.random()*480);
    }
    delete(){
    this.div.addEventListener('dblclick',()=>{
        this.div.remove()
        })} 
    locationY(){
        let ranNumber = Math.floor(Math.random()*480);
        this.div.style.marginTop=`${ranNumber}px`
        
    }
    locationX(){
        let ranNumber = Math.floor(Math.random()*480);
        this.div.style.marginLeft=`${ranNumber}px`

    }
}

// Class Rectangle perimeter
class Rectangle extends Shape{
    constructor(width,height){
        super(width,height)
        this.name="Rectangle";
        this.div.classList.add('rectangle');
        this.div.style.height=`${this.height}px`
        this.div.style.width=`${this.width}px`
        this.delete()
        this.locationY()
        this.locationX()
        this.div.addEventListener('click',()=>{
            this.describe()
            this.calculation()
        })

    }
    calculation(){
        shapeArea.innerHTML = this.width*this.height

        let x = parseInt(this.width)
        let y = parseInt(this.height)
        shapePerimeter.innerHTML = `${2*(x+y)}`
        shapeRadius.innerHTML = 'N/a'
    } 
}

// Class Square 
class Square extends Shape{
    constructor(sideLength){
        super(sideLength)
        this.name='Square'
        this.div.classList.add('square')
        this.div.style.height=`${this.sideLength}px`
        this.div.style.width=`${this.sideLength}px`
        this.delete()
        this.locationY()
        this.locationX()
        this.div.addEventListener('click',()=>{
            this.describe()
            this.calculation()
        })

    }
    calculation(){
        shapeArea.innerHTML = this.sideLength**2
        shapePerimeter.innerHTML = 4*this.sideLength
        shapeRadius.innerHTML = 'N/a'

    }
    describe(){
        shapeName.innerHTML=this.name
        shapeWidth.innerHTML=this.sideLength
        shapeHeight.innerHTML=this.sideLength
        shapeRadius.innerHTML = 'N/a'
    }
}


//Class Circle 
class Circle extends Shape{
    constructor(radius){
        super(radius)
        this.name='Circle'
        this.div.classList.add('circle')
        this.div.style.height= `${2*this.radius}px`
        this.div.style.width= `${2*this.radius}px`
        this.div.style.borderRadius =`${this.radius}px`;
        this.delete()
        this.locationY()
        this.locationX()
        this.div.addEventListener('click',()=>{
        this.describe()
        this.calculation()
         })
        
    }
    calculation(){
    shapeArea.innerHTML = Math.floor(Math.PI * this.radius * this.radius)
    shapePerimeter.innerHTML = Math.floor(2* Math.PI * this.radius)
        
    }
    describe(){
        shapeName.innerHTML=this.name
        shapeWidth.innerHTML=2*this.radius
        shapeHeight.innerHTML=2*this.radius
        shapeRadius.innerHTML = this.radius
    }
}

//Class Triangle
class Triangle extends Shape{
    constructor(tri_Height){
        super(tri_Height)
        this.name='Triangle'
        this.div.classList.add('triangle')
        this.div.style.borderLeft = `${this.tri_Height}px solid transparent`  
        this.div.style.borderRight = `${this.tri_Height}px solid transparent`  
        this.div.style.borderBottom = `${this.tri_Height}px solid yellow`  
        this.delete()
        this.locationY()
        this.locationX()
        this.div.addEventListener('click',()=>{
            this.describe()
            this.calculation()
             })

    }
    calculation(){
        shapeArea.innerHTML = .5* this.tri_Height * this.tri_Height
        shapePerimeter.innerHTML = Math.floor(2*this.tri_Height+Math.sqrt(2)*this.tri_Height)    
        }
        describe(){
            shapeName.innerHTML=this.name
            shapeWidth.innerHTML=this.tri_Height
            shapeHeight.innerHTML=this.tri_Height
            shapeRadius.innerHTML = 'N/a'
        } 
}





