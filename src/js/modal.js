import { login, register } from "./request.js";


const modalLogin = () => {
    const modal = document.createElement("dialog")
    const divContainer = document.createElement("div")
    const buttonClose = document.createElement("button")
    const form = document.createElement("form")
    const h2 = document.createElement("h2")
    const inputMail = document.createElement("input")
    const inputPassWord = document.createElement("input")
    const buttonLogin = document.createElement("button")
    const p = document.createElement("p")
 

    modal.classList.add("modal")
    divContainer.classList.add("modal-container")
    buttonClose.classList.add("close-modal")
    form.classList.add("modal-body")
    buttonLogin.classList.add("btn-login")

    h2.innerText = "Login"
    inputMail.type = "email"
    inputMail.placeholder = "E-mail"
    inputMail.required = "true"
    inputMail.id = "email"
    inputPassWord.type = "password"
    inputPassWord.placeholder = "Senha"
    inputPassWord.required = "true"
    inputPassWord.id = "password"
    buttonLogin.innerText = "Entrar"
    
    p.innerHTML = `Não tem cadastro? <a href=""> Clique aqui</a> para se cadastrar`
    
    form.append(h2,inputMail,inputPassWord,buttonLogin,p)
    divContainer.append(buttonClose,form)
    modal.appendChild(divContainer)
    const elemets = [...form.elements]
    form.addEventListener("submit", async(event) => {
        event.preventDefault()
        const body = {}

        elemets.forEach((input) => {
            if(input.tagName == "INPUT"){
                body [input.id] = input.value
            }
        })
        await login(body)
    })

    return modal
    

}
const modalRegister = () => {
    const modal = document.createElement("dialog")
    const divContainer = document.createElement("div")
    const buttonClose = document.createElement("button")
    const form = document.createElement("form")
    const h2 = document.createElement("h2")
    const inputName = document.createElement("input")
    const inputMail = document.createElement("input")
    const inputPassWord = document.createElement("input")
    const inputAvatar = document.createElement("input")
    const buttonRegister = document.createElement("button")
    const p = document.createElement("p")
    

    modal.classList.add("modal")
    divContainer.classList.add("modal-container")
    buttonClose.classList.add("close-modal")
    form.classList.add("modal-body")
    buttonRegister.classList.add("btn-login")

    h2.innerText = "Cadastrar"
    inputName.type = "text"
    inputName.placeholder = "Nome"
    inputName.required = "true"
    inputName.id = "name"
    inputMail.type = "email"
    inputMail.placeholder = "E-mail"
    inputMail.required = "true"
    inputMail.id = "email"
    inputPassWord.type = "password"
    inputPassWord.placeholder = "Senha"
    inputPassWord.required = "true"
    inputPassWord.id = "password"
    inputAvatar.type = "text"
    inputAvatar.placeholder = "Avatar?"
    inputAvatar.required = "true"
    inputAvatar.id = "avatar_url"
    buttonRegister.innerText = "Entrar"
    
    p.innerHTML = `Já tem cadastro? <a href=""> Clique aqui</a> para logar`

   
    form.append(h2,inputMail,inputName,inputPassWord,inputAvatar,buttonRegister,p)
    divContainer.append(buttonClose,form)
    modal.appendChild(divContainer)

    const elemets = [...form.elements]
    form.addEventListener("submit", async(event) => {
        event.preventDefault()
        const body = {}

        elemets.forEach((input) => {
            if(input.tagName == "INPUT"){
                body [input.id] = input.value
            }
        })
        await register(body)
    })

    return modal
}
export {modalLogin,modalRegister}

/*
    <!-- <dialog class="modal" open>
      <div class="modal-container">
        <button class="close-modal"></button>
        <form class="modal-body">
          <h2>Login</h2>
          <input type="email" placeholder="E-mail" required="true">
          <input type="password" placeholder="Senha" required="true">
          <button class="btn-login">Entrar</button>
          <p>Não tem cadastro? <a href="">Clique aqui</a> para se cadastrar.</p>
        </form>
      </div>
    </dialog> -->
*/