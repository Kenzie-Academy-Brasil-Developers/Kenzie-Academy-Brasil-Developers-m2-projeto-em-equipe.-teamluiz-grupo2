import { getAllPets } from "./request.js"
import { modalLogin,modalRegister } from "./modal.js"
import { darkMode } from "./dark-mode.js";
darkMode()
AOS.init()

function menuDropdown () {
    const header = document.querySelector('.header')
    const navButtons = document.querySelector('.nav-buttons')
    const imgMenuDropdown = document.querySelector('.menu-dropdown')

    imgMenuDropdown.addEventListener('click', () => {
        imgMenuDropdown.remove()

        const imgExit = document.createElement('img')
        imgExit.src = "./src/img/cancel.png"
        imgExit.alt = "Sair do menu"
        imgExit.className = 'exit'

        header.appendChild(imgExit)

        navButtons.style.display = 'flex'
        navButtons.style.padding = '12px 0 50px 0'

        
        imgExit.addEventListener('click', () => {
            imgExit.remove()
            header.appendChild(imgMenuDropdown)
            navButtons.style.display = 'none'
        })
        
    })
}
menuDropdown ()

const ulPetsList = document.querySelector('.pets-list')
const allPets = (await getAllPets()).filter((pet) => pet.available_for_adoption)

const openLogin = () => {
  const login = document.querySelector("#loginButton");
  const body = document.querySelector("body");
  login.addEventListener("click", () => {
    const modal = modalLogin();
    body.appendChild(modal);
    modal.showModal();
  });
};

const openRegister = () => {
  const register = document.querySelector("#registerButton");
  const body = document.querySelector("body");
  register.addEventListener("click", () => {
    const modal = modalRegister();
    body.appendChild(modal);
    modal.showModal();
  });
};

if (localStorage.getItem("user")) {
  const divNavButtons = document.querySelector(".nav-buttons");
  divNavButtons.innerHTML = "";

  const buttonProfile = document.createElement("button");
  buttonProfile.innerText = "Perfil";
  buttonProfile.addEventListener("click", () => {
    location.assign("./src/page/user.html");
  });

  const buttonLogout = document.createElement("button");
  buttonLogout.className = "emphasis-button";
  buttonLogout.innerText = "Logout";
  buttonLogout.addEventListener("click", () => {
    localStorage.removeItem("user");
    location.reload();
  });

  divNavButtons.append(buttonProfile, buttonLogout);
} else {
  openLogin();
  openRegister();
}

function filterBySpecies() {
  const selectFilter = document.querySelector(".default");
  selectFilter.addEventListener("click", () => {
    if (selectFilter.value == "null") {
      selectFilter.className = "default";

      renderPetList(allPets);
    } else {
      selectFilter.className = "selected";
      let filteredPets = allPets.filter(
        (pet) => pet.species == selectFilter.value
      );

      if (filteredPets.length == 0) {
        let liEmpty = document.createElement("li");
        liEmpty.innerText = "Desculpe, no momento não há itens dessa categoria";
        ulPetsList.innerHTML = "";
        ulPetsList.appendChild(liEmpty);
      } else {
        renderPetList(filteredPets);
      }
    }
  });
}
filterBySpecies();

function createPetCard(obj) {
  let liPetCard = document.createElement("li");
  let divPetImg = document.createElement("div");
  let divPetInfo = document.createElement("div");
  let h2PetName = document.createElement("h2");
  let smallPetSpecies = document.createElement("small");
  let divButton = document.createElement("div");
  let buttonAdopt = document.createElement("button");
  liPetCard.dataset.aos = "zoom-in-up";
  liPetCard.dataset.aosMirror = "true";
  liPetCard.className = "pet-card";
  divPetImg.className = "pet-img";
  divPetImg.style.backgroundImage = `url(${obj.avatar_url})`;
  h2PetName.innerText = obj.name;
  smallPetSpecies.innerText = obj.species;
  buttonAdopt.innerText = "Me adota?";

  if (localStorage.getItem("user")) {
    buttonAdopt.style.display = "unset";
  }

  divButton.appendChild(buttonAdopt);
  divPetInfo.append(h2PetName, smallPetSpecies, divButton);
  liPetCard.append(divPetImg, divPetInfo);

  return liPetCard;
}

async function renderPetList(petsList) {
  ulPetsList.innerHTML = "";

  petsList.forEach((pet) => {
    ulPetsList.appendChild(createPetCard(pet));
  });
}
renderPetList(allPets);

