import { getUserData } from "../js/request.js";

const user = await getUserData();

const userImg = document.querySelector(".user-img");
const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");
const registerPetBtm = document.querySelector(".my-pets-ul");
const userPets = document.querySelector(".my-pets-ul");

// const userBirthday = document.querySelector(".user-birthday");
userName.innerText = user.name;
userEmail.innerText = user.email;
userImg.src = user.avatar_url;

function createPetsCards(pet) {
  const li = document.createElement("li");
  const petImg = document.createElement("img");
  petImg.src = pet.avatar_url;
  const infoContainer = document.createElement("div");
  const petName = document.createElement("p");
  petName.innerText = `Nome: `;
  const spanName = document.createElement("span");
  spanName.innerText = pet.name;
  petName.append(spanName);
  const petSpecies = document.createElement("p");
  petSpecies.innerText = `Espécie: `;
  const spanSpecies = document.createElement("span");
  spanSpecies.innerText = pet.species;
  petSpecies.append(spanSpecies);
  const petStatus = document.createElement("p");
  petStatus.innerText = "Adotável: ";
  const spanStatus = document.createElement("span");
  if (petStatus) {
    spanStatus.innerText = "Sim";
  } else {
    spanStatus.innerText = "Não";
  }
  petStatus.append(spanStatus);
  const updatePet = document.createElement("button");
  updatePet.innerText = "Atualizar";
  updatePet.classList = "update-pet-btm";

  li.append(petImg, infoContainer);
  infoContainer.append(petName, petSpecies, petStatus, updatePet);

  return li;
}

function rendeMyPets() {
  const pets = user.my_pets;
  userPets.innerHTML = "";
  pets.forEach((pet) => {
    userPets.append(createPetsCards(pet));
  });
}

rendeMyPets();
