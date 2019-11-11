
let user ={
  name:"Oleg",
  age: 30,
  sayHi: function() {
    alert(this.name);
  }
};

let admin = user;
admin.sayHi();

