const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}
video.stop = function(){
    console.log(this);
}
video.stop();
video.play();
console.log(this);

const laptop = {
    brand: 'Dell',
    startUp() {
        console.log(this.brand);
    }
};
laptop.startUp();

function hello(callback){
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Goodbye!");
}
hello(goodbye);

function simpleDownload(url, cb) {
    setTimeout(() => {
        cb(url);
    }, 500);
}
simpleDownload("file.jpg", (file) => console.log("Downloaded " + file));

const loadPokemon = (id, cb) => {
    if(typeof fetch !== 'undefined') {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            cb(data)
        })
        .catch(e => console.log(e.message));
    }
}
loadPokemon(56, (pokemon) => {
    console.log(pokemon.name);
})

function walkDogCallback(callback){
    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}
function cleanKitchCallback(callback){
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 2500);
}
function takeOutTrashCallback(callback){
    setTimeout(() => {
        console.log("You take out the trash");
        callback();
    }, 500);
}

walkDogCallback( () => {
    cleanKitchCallback( () => {
        takeOutTrashCallback( () => console.log("You finished all the chores (Callback)"));
    })
})

function walkDogPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}
function cleanKitchenPromise(){
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
function takeOutTrashPromise(){
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

walkDogPromise().then(value => {console.log(value); return cleanKitchenPromise()})
.then(value => {console.log(value); return takeOutTrashPromise()})
.then(value => {console.log(value); console.log("You finished all the chores (Promise)!")})
.catch(error => console.error(error));

function checkBattery() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Battery OK"), 100);
    });
}
checkBattery().then(msg => console.log(msg));

async function doChores(){
    try{
        const walkDogResult = await walkDogPromise();
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchenPromise();
        console.log(cleanKitchenResult);
        const takeOutTrashResult = await takeOutTrashPromise();
        console.log(takeOutTrashResult);
        console.log("You finsihed all the chores (Async/Await)!");
    }
    catch(error){
        console.error(error);
    }
}
doChores();

async function loginUser() {
    return new Promise(resolve => setTimeout(() => resolve("Welcome Admin"), 200));
}
async function main() {
    const msg = await loginUser();
    console.log(msg);
}
main();