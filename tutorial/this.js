const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
};

video.stop();
video.play();
console.log(this);



const person = {
    name: "John",
    sayName() {
        // 'this' refers to 'person'
        console.log("My name is " + this.name);
    }
};

person.sayName(); 

// If we detach the function, 'this' gets lost
const say = person.sayName;