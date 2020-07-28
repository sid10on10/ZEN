var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }


// Add height and weight to Fluffy
cat["height"] = 300;
cat["weight"] = 50;

// Fluffy name is spelled wrongly. Update it to Fluffyy
cat["name"] = "Fluffyy"

// List all the activities of Fluffyy’s catFriends.
for(i of cat["catFriends"]){
    console.log(i["activities"])
}

// Print the catFriends names.
for(i of cat["catFriends"]){
    console.log(i["name"])
}

// Print the total weight of catFriends
let total_weight = 0;
for(i of cat["catFriends"]){
    total_weight += i["weight"]
}
console.log(total_weight)


// Print the total activities of all cats (op:6)
for(i of cat["activities"]){
    console.log(i)
}
for(i of cat["catFriends"]){
    for(j of i["activities"]){
        console.log(j)
    }
}

// Add 2 more activities to bar & foo cats
for(i of cat["catFriends"]){
    i["activities"].push("my activity")
}

// Update the fur color of bar
cat["catFriends"][0]["furcolor"] = "red"

console.log(cat)









