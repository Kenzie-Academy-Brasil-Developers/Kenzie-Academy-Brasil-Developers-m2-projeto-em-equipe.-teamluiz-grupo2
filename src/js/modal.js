function modal(chieldren) {
    let body = document.querySelector('body')

    let bgmodal = document.createElement('div')
    let modal = document.createElement('div')
    let close = document.createElement('button')

    bgmodal.classList = "bgmodal fixed flex justify-center items-center"
    modal.classList = "modal relative flex column justify-center items-center"
    close.classList = "modal-close absolute px20 color-black weight500"
    close.innerText = "X"

    modal.append(chieldren, close)
    bgmodal.append(modal)

    bgmodal.addEventListener('click', (event) => {
        let evento = event.target.classList[0]
        if (evento == "bgmodal" || evento == "modal-close") {
            bgmodal.remove()
        }
    })

    body.append(bgmodal)
}


function deleteProfile(){
    let div  = document.createElement('div')
    div.classList = "delete-profile"
    div.insertAdjacentHTML('beforeend', `
        <h2>Deseja mesmo deletar sua conta?</h2>
        <button class="cancel" type="button">Não desejo deletar minha conta</button>
        <button class="delete" type="button">Quero deletar minha conta</button>
    `)

    modal(div)

    div.addEventListener('click', (event) => {
        let evento = event.target.classList[0] 
        if(evento == "delete"){
            //chamar requisição 
            // pegar dados do localStorage
            //chamar a requisição passando o token do usuario

        }else if(evento == "cancel"){
            //fechar o modal
        }
    })
}

function updateProfile(){
    let div  = document.createElement('div')
    div.classList = "update-profile"
    div.insertAdjacentHTML('beforeend', `
        <form class="">
        <h2>Atualizar perfil</h2>
        <input class="" type="text" placeholder="Nome" required>
        <input class="" type="email" placeholder="E-mail" required>
        <input class="" type="text" placeholder="Avatar" required>
        <button class="" type="submit">Atualizar</button>
        </form>
    `)
}