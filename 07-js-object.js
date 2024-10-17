const person = {
  name: "张三",
  age: 30,
  greet: function () {
    console.log("你好，我是" + this.name);
  },
};

person.greet();
console.log(person.age);
