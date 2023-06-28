class emp{
    id="200"
    getdetails(){
        console.log("emp details method")
    }
    set_details(name){
        this.name=name
    }

}
let e1=new emp()
let e2=new emp()
let e3=new emp()
console.log(e1.id)
e1.getdetails()
e1.set_details("chandu")
console.log(e1)
console.log(e2)
e3.set_details()
console.log(e3)