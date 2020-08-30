/*
Create a petshop project in oops with pets available for adoption in one class (availability class) and a request class containing enquiries for different kinds of pets. (request class)

Write an insert method to create  different  kinds of pets available for adoption. Add required fields containing the characteristics and history of the pet.
Write an insert method to store the incoming enquiries (availability check) for pets in request class. Every enquiry will contain an array of pets of their choice. 
Write a method to find the status (available or not ) of the first 5 enquiry in request class, based on the data present in the availability collection.
Write a query to find the count of different kinds of pets found in availability collection(eg. Dog -5, Cat-3, Parrot-4)
Write  a method  that maps the request data with availability data,  explaining how many  incoming requests are matching with  each entry (pet availability) found in availability collection.

*/
type Type = "dog" | "cat" | "fish";
class Pet {
    name: string;
    type: Type;
    color: string;
    age: number;
    breed: string;
    history: string;
    location: string;
  
    constructor(name,type,color,age,breed,history,location) { 
      this.name = name;
      this.type = type;
      this.color = color;
      this.age = age;
      this.breed = breed;
      this.history = history;
      this.location = location;
    }
}

class Availability{
    pets:Pet[];

    constructor(pets=[]){
        this.pets = pets;
    }

    insertPet(pet:Pet){
        this.pets.push(pet)
    }

    availablePets(){
        return this.pets
    }

    removePet(name:string){
        for(let i=0;i<this.pets.length;i++){
            if(this.pets[i].name==name){
                this.pets.splice(i,1)
            }
        }
    }

    count(){
        let dog=0,cat=0,fish=0;
        for(let i=0;i<this.pets.length;i++){
            if(this.pets[i].type == "dog"){
                dog++;  
            }else if(this.pets[i].type == "cat"){
                cat++;
            }else{
                fish++
            }
        }
        return {Dog:dog, Cat:cat, fish:fish}
    }
}

class requestPet extends availability{
    queries:object[][];
    constructor(){
        super();
    };

    storeEnquires(query:object[]){
        this.queries.push(query);
    }

}

let myPet1 = new Pet("tommy","dog","brown",4,"labrador","adopted","Mumbai");
let myPet2 = new Pet("hero","dog","black",5,"indian","adopted","KGF");
let myPet3 = new Pet("pussy","cat","black",5,"indian","adopted","KGF");
let myPet4 = new Pet("blacky","cat","black",5,"indian","adopted","KGF");
let myPet5 = new Pet("golden","fish","blue",5,"indian","adopted","KGF");
let myPet6 = new Pet("nimmo","fish","golden",5,"indian","adopted","KGF");
let petshop = new Availability()
petshop.insertPet(myPet1)
petshop.insertPet(myPet2)
petshop.insertPet(myPet3)
petshop.insertPet(myPet4)
petshop.insertPet(myPet5)
petshop.insertPet(myPet6)
console.log(petshop.availablePets())
console.log(petshop.count())