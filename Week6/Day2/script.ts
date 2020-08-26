class Pet {
  name: string;
  type: string;
  color: string;
  age: number;
  breed: string;
  history: string;
  Location: string;

  constructor(name,type,color,age,breed,history,Location) { 
      this.name = name;
      this.type = type;
      this.color = color;
      this.age = age;
      this.breed = breed;
      this.history = history;
      this.Location = Location;
  }
}

class request {
  query: object[][] = [];
  pets:pet[] =[];

  constructor(){ }

  storeEnquiry(enquery : object[]) { 
      this.query.push(enquery);
  }

  enqueryStatus(){
      let result = []
      for(let i = 0; i < 5 && i < this.query.length; i++){
          let search = this.petAvailable(this.query[i]);
          result.push(search);
      }
      return result;
  }

  petAvailable(queryArr : object[]) { 
      let res = {pets:[], count:0};

      for(let i in queryArr){
          let query = queryArr[i];
          this.pets.forEach((pet)=>{
              let isAvailable = Object.keys(query).every(
                  (constrains) => query[constrains] == pet[constrains]  || query[constrains] == '');
              if(isAvailable){
                  let petData = {name : pet.name}
                  res.pets.push(petData);
                  res.count++;
              }
          });
      }
      return res
  }

}

class availability extends request{
  pets: pet[] = [];

  constructor(){ super(); }

  insert(newPet: pet) {
      this.pets.push(newPet);
  }

  removePet(name: string) {
      let elementIndex = this.pets.findIndex(element => element.name  == name);
      this.pets.splice(elementIndex, 1);
  }

  count() { 
      let pets = this.pets.reduce((acc, element) => {
          acc[element.type] ? acc[element.type]++ : acc[element.type] = 1
          return acc;
      },{});
      return pets;
  }

}

let petShop = new availability();

let pet1 = new pet({
    name: 'Tommy',
    type: "dog",
    color: 'black',
    age : 3,
    breed: "dog",
    history: "Adopted",
    Location: "Mumbai",
});

petShop.insert(pet1);

let pet2 = new pet({
  name: 'Dogo',
  type: "dog",
  color: 'black',
  age : 1,
  breed: "dog",
  history: "Owned once by Vishal",
  Location: "Chennai",
});

petShop.insert(pet2);

let pet3 = new pet({
  name: 'Black Cat',
  type: "cat",
  color: 'black',
  age : 3,
  breed: "cat",
  history: "New Born",
  Location: "Varanasi",
});

petShop.insert(pet3);

let pet4 = new pet({
  name: 'nemo',
  type: "fish",
  color: 'golden orange',
  age : 2,
  breed: "gold fish",
  history: "owned by gupta",
  Location: "chennai",
});

petShop.insert(pet4);

let pet5 = new pet({
  name: 'meow',
  type: "cat",
  color: 'black',
  age : 2,
  breed: "cat",
  history: "New Born",
  Location: "chennai",
});

petShop.insert(pet5);

petShop.storeEnquiry([{color: 'black', type : 'dog'}]);

