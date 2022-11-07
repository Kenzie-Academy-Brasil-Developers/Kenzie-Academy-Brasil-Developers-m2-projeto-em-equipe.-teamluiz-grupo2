// function modal(chieldren) {
//     let body = document.querySelector('body')

//     let bgmodal = document.createElement('div')
//     let modal = document.createElement('div')
//     let close = document.createElement('button')

//     bgmodal.classList = "bgmodal fixed flex justify-center items-center"
//     modal.classList = "modal relative flex column justify-center items-center"
//     close.classList = "modal-close absolute px20 color-black weight500"
//     close.innerText = "X"

//     modal.append(chieldren, close)
//     bgmodal.append(modal)

//     bgmodal.addEventListener('click', (event) => {
//         let evento = event.target.classList[0]
//         if (evento == "bgmodal" || evento == "modal-close") {
//             bgmodal.remove()
//         }
//     })

//     body.append(bgmodal)
// }

