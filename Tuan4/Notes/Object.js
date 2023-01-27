// Object trong Javascript
var emailKey = "email";
var myInfo = {
  name: "Thanh",
  age: 18,
  address: "Ha noi, Vn",
  [emailKey]: "2@gmail.com",
  getName: function () {
    return this.name;
  },
  getAge: function () {},
};

//myInfo.email = "sd@mail.com";
//myInfo["my-email"] = "sd";
console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo["email"]);

var myKey = "address";
console.log(myInfo[myKey]);
delete myInfo.age;
console.log(myInfo.getName());
//function -> phuong thuc method
//other -> thuoc tinh property

//Object constructor
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var author = new User("Son", "Dang", "Avatar");
var user = new User("Vu", "Nguyen", "Avatar");

author.title = "Chia se dao tai F8";
user.comment = "lue cos khoa";
console.log(author.getName());
console.log(user.getName());

/* Object prototype - Basic
1. Prototype laf gif?
2. Su dung khi nao?
*/
User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};
console.log(user.getClassName());
