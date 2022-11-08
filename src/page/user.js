import { getUserData } from "../js/request.js";

const user = await getUserData();

const userImg = document.querySelector(".user-img");
const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");
const registerPetBtm = document.querySelector(".my-pets-ul");
const userPets = document.querySelector(".my-pets-ul");

function openMenu() {
  const btmMenu = document.querySelector(".hamburger-lines");
  const menu = document.querySelector(".menus");
  if (menu) {
    if (window.screen.width > 500) {
      menu.classList.remove("show");
    }
    btmMenu.addEventListener("click", () => {
      menu.classList.toggle("show");
      btmMenu.classList.toggle("cancel-lines");
    });
  }
}
openMenu();
// const userBirthday = document.querySelector(".user-birthday");
userName.innerText = user.name;
userEmail.innerText = user.email;
userImg.src = user.avatar_url;
function logoutHome() {
  const logout = document.querySelector("#logout");
  const home = document.querySelector("#home");
  if (logout) {
    logout.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.replace("../../index.html");
    });
  }
  if (home) {
    home.addEventListener("click", () => {
      window.location.replace("../../index.html");
    });
  }
}
logoutHome();
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

import { modalPets } from "../js/modal.js";

function openAddPet() {
  let dataInputs = [
    {
      nome: "name",
      type: "text",
      placeHolder: "nome",
      required: true,
    },
    {
      nome: "raça",
      type: "text",
      placeHolder: "Raça",
      required: true,
    },
    {
      nome: "avatar",
      type: "url",
      placeHolder: "Avatar",
    },
  ];
  const buttonAdd = document.querySelector(".register-pet");
  buttonAdd.addEventListener("click", () => {
    modalPets("Cadastrar Pet", dataInputs);
  });
}

function openEditPet() {
  let dataInputs = [
    {
      nome: "avatar",
      type: "url",
      placeHolder: "Avatar",
      required: true,
    },
  ];
  const buttonAdd = document.querySelector(".update-pet-btm");
  if (buttonAdd) {
    buttonAdd.addEventListener("click", () => {
      modalPets("Editar Pet", dataInputs);
    });
  }
}

openAddPet();
openEditPet();
