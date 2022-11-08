import { getAllPets } from "./request.js"
import { modalLogin,modalRegister } from "./modal.js"


function createPetCard (obj) {
    let liPetCard       = document.createElement('li')
    let divPetImg       = document.createElement('div')
    let divPetInfo      = document.createElement('div')
    let h2PetName       = document.createElement('h2')
    let smallPetSpecies = document.createElement('small')
    let divButton       = document.createElement('div')
    let buttonAdopt     = document.createElement('button')

    liPetCard.className = 'pet-card'
    divPetImg.className = 'pet-img'
    divPetImg.style.backgroundImage = `url(${obj.avatar_url})`
    h2PetName.innerText       = obj.name
    smallPetSpecies.innerText = obj.species
    buttonAdopt.innerText     = 'Me adota?'

    divButton.appendChild(buttonAdopt)
    divPetInfo.append(h2PetName, smallPetSpecies, divButton)
    liPetCard.append(divPetImg, divPetInfo)

    return liPetCard
}

async function renderPetList () {
    const ulPetsList = document.querySelector('.pets-list')
    const allPets = await getAllPets()
    allPets.filter((pet) => pet.available_for_adoption).forEach((pet) => {
        ulPetsList.appendChild(createPetCard(pet))
        
    })
}
renderPetList()


const openLogin = () => {
    const login = document.querySelector("#loginButton")
    const body = document.querySelector("body")
    login.addEventListener("click", ()=> {
        const modal = modalLogin()
        body.appendChild(modal)
        modal.showModal()
    })
}
openLogin()


const openRegister = () => {
    const register = document.querySelector("#registerButton")
    const body = document.querySelector("body")
    register.addEventListener("click", ()=> {
        const modal = modalRegister()
        body.appendChild(modal)
        modal.showModal()
    })

}
openRegister()


