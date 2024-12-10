// //ES6 Basics
// //question1
// const arr1 = [1,10,5];
// const arr2 = [6,2,8];
// const arr3 = [...arr1, ...arr2]
// //question 2
// const arrCopy = [...arr3]
// //question 3
// const sortedArr = [...arrCopy].sort((a, b) => a - b);
// //question 4
// console.log(sortedArr)
// console.log(arr3)
// //Classes
// question 1
class Animal {
    constructor(name) {
        this.name = name;

    }
    speak(){
        console.log(`${this.name}makes a noise.`);
    }
}
const animal = new Animal(`Animal`);
// question 2
class Dog extends Animal {
    constructor(name,isThreeLegged, hasThreeHeads) {
        super(name);
        this.legs = isThreeLegged ? 3 : 4;
    }
}