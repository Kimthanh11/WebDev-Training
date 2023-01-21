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
