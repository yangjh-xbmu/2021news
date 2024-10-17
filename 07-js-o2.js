function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("你好，我是" + this.name);
  };
}

const person1 = new Person("张三", 30);
const person2 = new Person("李四", 20);
console.log(person2.name);
