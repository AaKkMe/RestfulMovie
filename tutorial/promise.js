

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true; // Set to true to pass
            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash");
            }
            else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

// Consuming the promises
walkDog()
    .then(value => {console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeOutTrash()})
    .then(value => {console.log(value); console.log("You finished all the chores!")})
    .catch(error => console.error(error));



setTimeout(() => {
    console.log("\nSTART");

    const simplePromise = new Promise((resolve, reject) => {
        const isSuccess = true;
        if(isSuccess) resolve("Operation Successful");
        else reject("Operation Failed");
    });

    simplePromise
        .then(msg => console.log("Simple Promise: " + msg))
        .catch(err => console.log(err));
        
}, 5000);