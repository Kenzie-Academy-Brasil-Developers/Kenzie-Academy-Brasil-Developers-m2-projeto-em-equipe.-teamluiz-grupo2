import { darkMode } from "../js/dark-mode.js";
import { modalPets, modalDeleteUser, modalUpdateUser } from "../js/modal.js";
import { getAllPets, getUserData } from "../js/request.js";
darkMode();
AOS.init();
const user = await getUserData();

if (!localStorage.getItem("user")) {
  window.location.replace("../../index.html");
}
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
  li.dataset.aos = "zoom-in-up";
  const petImg = document.createElement("img");
  petImg.src = pet.avatar_url;
  const infoContainer = document.createElement("div");
  const petName = document.createElement("p");
  petName.innerText = `Nome: `;
  const spanName = document.createElement("span");
  spanName.innerText = pet.name;
  petName.append(spanName);

  const petBread = document.createElement("p");
  petBread.innerText = `Nome: `;
  const spanBread = document.createElement("span");
  spanBread.innerText = pet.bread;
  petBread.append(spanBread);
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
  updatePet.id = pet.id;

  li.append(petImg, infoContainer);
  infoContainer.append(petName, petBread, petSpecies, petStatus, updatePet);

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

async function openAddPet() {
  let dataInputs = [
    {
      id: "name",
      type: "text",
      placeHolder: "Nome",
      extras: ["required"],
    },
    {
      id: "bread",
      type: "text",
      placeHolder: "Raça",
      extras: ["required"],
    },
    {
      id: "species",
      element: "select",
      options: [
        { option: "Cachorro" },
        { option: "Gato" },
        { option: "Aves" },
        { option: "Repteis" },
        { option: "Outros" },
      ],
      extras: ["required"],
    },
    {
      id: "avatar_url",
      type: "url",
      placeHolder: "Avatar",
    },
  ];
  const buttonAdd = document.querySelector(".register-pet");
  buttonAdd.addEventListener("click", () => {
    modalPets("Cadastrar Pet", dataInputs);
  });
}

async function openEditPet() {
  let dataInputs = [
    {
      id: "name",
      type: "text",
      placeHolder: "Nome",
      extras: ["required"],
    },
    {
      id: "bread",
      type: "text",
      placeHolder: "Raça",
      extras: ["required"],
    },
    {
      extras: ["readOnly", "required"],
      id: "species",
      placeHolder: "Especie",
    },
    {
      id: "avatar_url",
      type: "url",
      placeHolder: "Avatar",
    },
  ];
  const buttonAdd = document.querySelectorAll(".update-pet-btm");
  let dataPets = await getAllPets();

  buttonAdd.forEach((el) => {
    el.addEventListener("click", (event) => {
      let filtro = dataPets.filter((el) => el.id == event.target.id);
      dataInputs.forEach((el) => {
        let tag = el.id;
        el["value"] = filtro[0][tag];
      });
      modalPets("Editar Pet", dataInputs, event.target.id);
    });
  });
}

openAddPet();
openEditPet();

function deleteProfile() {
  let btn = document.querySelector("#delete-account");
  btn.addEventListener("click", () => {
    modalDeleteUser();
  });
}
function updateProfile() {
  let btn = document.querySelector("#update-account");
  btn.addEventListener("click", () => {
    modalUpdateUser();
  });
}

deleteProfile();
updateProfile();
