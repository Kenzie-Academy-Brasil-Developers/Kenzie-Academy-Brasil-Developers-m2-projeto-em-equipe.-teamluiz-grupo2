import { modalLogin,modalRegister } from "./modal.js"
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