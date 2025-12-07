
function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}

hello(goodbye);



const loadPokemon = (id, cb) => {
    if (typeof fetch === 'undefined') {
        console.log("Skipping ");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        cb(data);
    })
    .catch(err => console.log("Pokemon Error:", err.message));
}

loadPokemon(56, (pokemon) => {
    console.log("Pokemon Name: " + pokemon.name);
});

function walkDog(callback){
    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}

function cleanKitch(callback){
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 2500);
}

function takeOutTrash(callback){
    setTimeout(() => {
        console.log("You take out the trash");
        callback();
    }, 500);
}

// Running the nested "Callback Hell"
walkDog( () => {
    cleanKitch( () => {
        takeOutTrash( () => console.log("You finished all the chores (Callback Style)"));
    })
});

console.log("--- PDF CODE END ---\n");


/* ==========================================
   PART 2: MY SIMPLE EXAMPLE
   ========================================== */
// (This will likely print before the chores finish because chores are async)
setTimeout(() => {
    console.log("\n--- SIMPLE EXAMPLE START ---");
    
    function calculateSum(a, b, callback) {
        console.log("Calculating...");
        const result = a + b;
        callback(result);
    }

    calculateSum(5, 10, (total) => {
        console.log("The total is: " + total);
        console.log("--- SIMPLE EXAMPLE END ---");
    });
}, 5000); // Delayed to let PDF code finish printing first