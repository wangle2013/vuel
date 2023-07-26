
//定义变量
let number:number=1
//定义数组
let arr:number[]=[1,2,2]
//联合类型
let face:number|string="s"
//类型别名
type d=number|string
let e:d=1
//定义函数
function addto(x:number,y:number):void{
console.log(x+y) 
}
let addto2=(x:number,y?:number)=>{
console.log(x)
}
//接口
interface icon{nu:number,h:string,addx?(nu:number,st:string):void}
let ob2d:icon={
 nu:2,
 h:""
}
//接口继承
interface icon2 extends icon{c:boolean}
let getAdd:icon2={
  nu:2,
  h:"",
  c:false
}
//元组
let arr55:[number,number]=[1,3]
let a6=234
//字面量类型
enum dir{
  "let","sdfd"
}
function getaddd(dir:dir){
  console.log(dir)
}
getaddd(dir.let)
 
let a:typeof arr55=["2 "]

class Person implements icon2{
  name:string
  password:string
  c:boolean
  nu:number
  h:string
  constructor(name:string,password:string){
    this.name=name
    this.password=password
    this.c=true
  }
  getname(n:string):void{
    console.log(this.name)
    console.log(n)
  }
}
let p=new Person("张三","历史")
interface point2d {x:number,y:number}
interface pointd {x:number,y:number}

let p24: point2d
let p3: pointd
p3=p24

function id<Type>(value:Type):Type{
  return value
}
id<number>(10)

class g<t>{
  n:t
  add(x:t,y:t):t{
    return x
  }
  constructor(value:t){
    this.n=value
  }
}
let n=new g(100)
n.add(29,23)

interface proo{
  id:string
}
type prr=Partial<proo>
