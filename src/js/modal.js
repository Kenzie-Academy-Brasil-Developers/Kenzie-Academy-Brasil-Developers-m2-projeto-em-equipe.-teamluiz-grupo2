import { deleteUser, login, register, updateUser, registerPet,editPetProfile } from "./request.js";


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
    const span = document.createElement("span")
    const spanCLick = document.createElement("span")
    const spanEnd = document.createElement("span")
    const label = document.createElement("label")

    label.classList.add("red")
    modal.classList.add("modal")
    divContainer.classList.add("modal-container")
    buttonClose.classList.add("close-modal")
    form.classList.add("modal-body")
    buttonLogin.classList.add("btn-login")
    spanCLick.classList.add("purple")
    

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
    span.innerText = "Não tem cadastro?"
    spanCLick.innerText = "Clique aqui"
    spanEnd.innerText = "para se cadastrar"

   
    p.append(span,spanCLick,spanEnd)
    form.append(h2,label,inputMail, inputPassWord, buttonLogin, p)
    divContainer.append(buttonClose, form)
    modal.appendChild(divContainer)

    const elemets = [...form.elements]

    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const body = {}

        elemets.forEach((input) => {
            if (input.tagName == "INPUT") {
                body[input.id] = input.value
            }
        })
        const data = await login(body)
        if(data.response == "ERROR"){
            label.innerText = data.message
        }
    })
    buttonClose.addEventListener("click", () => {
        modal.close()
    })
    spanCLick.addEventListener("click",()=> {
        const body = document.querySelector("body")
        const modalReg = modalRegister()
        body.appendChild(modalReg)
        modalReg.showModal()
        modal.close()

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
    const span = document.createElement("span")
    const spanCLick = document.createElement("span")
    const spanEnd = document.createElement("span")
    const label = document.createElement("label")

    label.classList.add("red")
    modal.classList.add("modal")
    divContainer.classList.add("modal-container")
    buttonClose.classList.add("close-modal")
    form.classList.add("modal-body")
    buttonRegister.classList.add("btn-login")
    spanCLick.classList.add("purple")

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
    span.innerText = "Já tem cadastro?"
    spanCLick.innerText = "Clique aqui"
    spanEnd.innerText = "para logar"

    

    p.append(span,spanCLick,spanEnd)
    form.append(h2, label,inputMail, inputName, inputPassWord, inputAvatar, buttonRegister, p)
    divContainer.append(buttonClose, form)
    modal.appendChild(divContainer)

    const elemets = [...form.elements]
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const body = {}

        elemets.forEach((input) => {
            if (input.tagName == "INPUT") {
                body[input.id] = input.value
            }
        })
        const data = await register(body)
        
        if(data.response == 'ERROR'){
            label.innerText = data.message
        }else{
        const body = document.querySelector("body")
        const modalLog = modalLogin()
        body.appendChild(modalLog)
        modalLog.showModal()
        modal.close()
        }
    })
    buttonClose.addEventListener("click", () => {
        modal.close()
    })

      
    spanCLick.addEventListener("click",()=> {
        const body = document.querySelector("body")
        const modalLog = modalLogin()
        body.appendChild(modalLog)
        modalLog.showModal()
        modal.close()

    })

    return modal
  
}

function modalDeleteUser() {
    //Criando elementos
    let deleteProfile = document.createElement('div')
    let title = document.createElement('h2')
    let btnCancel = document.createElement('button')
    let btnConfirm = document.createElement('button')

    //Atribuindo classes e IDs
    deleteProfile.id = "deleteProfile"
    btnCancel.classList = "cancel"
    btnConfirm.classList = "confirm"

    //Atibuindo valores
    title.innerText = "Deseja mesmo deletar sua conta?"
    btnCancel.innerText = "Não desejo deletar minha conta"
    btnConfirm.innerText = "Quero deletar minha conta"

    //Eventos
    btnCancel.addEventListener('click', (event) => {
        let bgmodal = document.querySelector('.modal-bg')
        bgmodal.remove()
    })
    btnConfirm.addEventListener('click', async (event) => {
        //pega token
        // let user = getLocalStorage()
        await deleteUser(user.token)
    })

    //Hierarquia
    deleteProfile.append(title, btnCancel, btnConfirm)


    //Retornando
    return deleteProfile
}
function modalUpdateUser() {
    //Criando elementos
    let updateProfile = document.createElement('form')
    let title = document.createElement('h2')
    let inputUsername = document.createElement('input')
    let inputEmail = document.createElement('input')
    let inputAvatar = document.createElement('input')
    let btnUpdate = document.createElement('button')

    //Atribuindo Classes e IDs
    updateProfile.id = "updateProfile"
    
    inputUsername.id = "name"
    inputUsername.type = "text"
    inputUsername.placeholder = "Nome"
    inputUsername.required = ""
    
    inputEmail.id = "email"
    inputEmail.type = "email"
    inputEmail.placeholder = "E-mail"
    inputEmail.required = ""
    
    inputAvatar.id = "avatar_url"
    inputAvatar.type = "text"
    inputAvatar.placeholder = "Avatar"
    inputAvatar.required = ""

    btnUpdate.type = "submit"

    //Atribuindo valores
    title.innerText = "Atualizar perfil"
    btnUpdate.innerText = "Atualizar"
    
    //Eventos
    updateProfile.addEventListener('submit', async () => {
        let inputs = [...updateProfile.elements]
        let body = {}
        //localStorage
        // let user = getLocalStorage()
        inputs.forEach(input => {
            if(input.tagName == 'INPUT' && input.value != ""){
                body[input.id] = input.value
            }
        })
        await updateUser(user.token, body)
    })

    //Hierarquia
    updateProfile.append(title, inputUsername, inputEmail, inputAvatar)

    //Retornando
    return updateProfile
}

function modalBase(titulo='',main='',footer=''){
    let body=document.querySelector('body')
    //criação dos elementos
    let backModal=document.createElement('section')
    let bodyModal=document.createElement('div')
    let headerModal=document.createElement('div')
    let titleModal=document.createElement('h2')
    let divClose=document.createElement('div')
    let closeModal=document.createElement('P')
    let mainModal=document.createElement('div')
    let footerModal=document.createElement('div')

    // ids e classes
    backModal.id='modal'
    bodyModal.classList='body'
    headerModal.classList='header'
    mainModal.classList='main'
    footerModal.classList='footer'

    //textos
    titleModal.innerText=`${titulo}`
    closeModal.innerText='X'

    //funções
    divClose.addEventListener('click',()=>{
        backModal.remove()
    })

    backModal.addEventListener('click',(event)=>{
        event.stopPropagation()
        if(event.target.id=='modal'){
            backModal.remove()
        }
    })

    //appends
    divClose.append(closeModal)
    headerModal.append(titleModal,divClose)
    mainModal.append(main)
    footerModal.append(footer)
    bodyModal.append(headerModal,mainModal,footerModal)
    backModal.append(bodyModal)    
    body.append(backModal)
}

function modalPets(titulo,inputs=[],id=''){
    let mainCadastro=document.createElement('div')
    let tituloForm=document.createElement('h2')
    let form=document.createElement('form')
    let buttonSubmit=document.createElement('button')

    buttonSubmit.innerText=titulo.split(' ')[0]
    buttonSubmit.type='submit'
    buttonSubmit.disabled=true

    form.append(tituloForm)
    tituloForm.innerText=titulo
    inputs.forEach(el=>{
        let input=document.createElement(el.element || 'input')
        if(el.element==undefined){
            input.type=el.type || 'text'
            input.placeholder=el.placeHolder
            input.value=el.value || ''
        }
        
        if(el.element=='select'){
            input.name=el.name || el.id
            let option0=document.createElement('option')
            option0.innerText='Selecionar'
            option0.value=''
            input.append(option0)
            el.options.forEach(el=>{
                let option=document.createElement('option')
                option.innerText=el.text || el.option
                input.append(option)
            })
        }
        
        input.id=el.id
        if(el.extras){
            el.extras.forEach(el=>{
                input[el]=true
            })
        }
        form.append(input)
    })

    let formData=[...form.elements]
    formData.forEach(el=>{
        el.addEventListener('input',()=>{
            buttonSubmit.disabled=true
            formData.forEach(el=>{
                if(el.value!=''){
                    buttonSubmit.disabled=false
                }
            })
        })
    })
    
    form.addEventListener('submit',(event)=>{
        event.preventDefault()
        let data={}
        formData.forEach(el=>{
            if((el.tagName=='INPUT' || el.tagName=='SELECT') && el.value!=''){
                data[el.id]=el.value
            }
        })
        let backModal=document.querySelector('#modal')
        backModal.remove()
        form.reset()
        requisitar(data,buttonSubmit.innerText,id)
    })
    
    form.append(buttonSubmit)
    mainCadastro.append(form)
    modalBase('',mainCadastro)
}

function requisitar(data,type,id){
    if(type.toLowerCase()=='cadastrar'){
        registerPet(data)
    }
    if(type.toLowerCase()=='editar'){
        editPetProfile(data,id)
    }
}

export{modalPets,modalLogin, modalRegister }

