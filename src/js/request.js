const login = async (body) =>{
    try{
        const request = await fetch("https://m2-api-adot-pet.herokuapp.com/session/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
        if(request.ok){
            localStorage.setItem("user",JSON.stringify(response))
            window.location.replace("/src/page/user.html")
        }
        return response
    }catch(erro){
        console.log(erro)
    }
}

const register = async(body) => {
    try{
        const request = await fetch("https://m2-api-adot-pet.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
        return response
    }catch(erro){
        console.log(erro)
    }

}
export { login,register}