const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      this.isTired = 1;
      console.log(`${name} needs a nap. Zzz...`);
    },
    play: function () {
      if (this.isTired === 0) {
        console.log(`Too tired to play.`);
        this.sleep();
      } else {
        console.log(`Ysy! ${name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//clover.sleep(); //no need to console.log or reference "pet"
//baxter.play();

//console.log(clover);
//console.log(baxter);

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = "";
  for (let pet of allPets) {
    //pet object in each of the pets
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(listItem);
  }
};
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
