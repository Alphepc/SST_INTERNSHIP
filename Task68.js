const person={
    fullname:function(city,country){
    return this.firstName+""+this.lastName+","+city+","+country;

}
}
const person1={
    firstName:"Alphe",
    lastName:"shymon ",
}
console.log(person.fullname.call(person1,"india "," norway"));