const baseUrl = "https://m2-api-adot-pet.herokuapp.com";

async function getAllPets () {
  const requestPets = await fetch(`${baseUrl}/pets`)
  const responsePets = await requestPets.json()

  return responsePets
}

const login = async (body) => {
  try {
    const request = await fetch(
      "https://m2-api-adot-pet.herokuapp.com/session/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const response = await request.json();
    if (request.ok) {
      localStorage.setItem("user", JSON.stringify(response));
      window.location.reload("/./index.html");
    }
    return response;
  } catch (erro) {
    console.log(erro);
   
  }
};

const register = async (body) => {
  try {
    const request = await fetch("https://m2-api-adot-pet.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const response = await request.json();

    return response;
  } catch (erro) {
    console.log(erro);
  }
};

async function getUserData() {
  const token = JSON.parse(localStorage.getItem("user"));

  try {
    const request = await fetch(
      "https://m2-api-adot-pet.herokuapp.com/users/profile",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      }
    );
    const response = await request.json();

    return response;
  } catch (err) {
    console.log(err);
  }
}

async function deleteProfile(token) {
  try {
    const request = await fetch(`${baseUrl}/users/profile`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (request.ok) {
      localStorage.removeItem("user")
      window.location.assign('../../index.html')
    }
  } catch (error) {
    console.log(error)
  }
};

async function updateProfile(token, body) {
  try {
    const request = await fetch(`${baseUrl}/users/profile`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    if (request.ok) {
      let response = await request.json()
      return response
    }
  } catch (error) {
    console.log(error)
  }
}

async function registerPet(data){
  let token=JSON.parse(localStorage.getItem('user'))
  try{
    const request=await fetch(`${baseUrl}/pets`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${token.token}`
      },
      body:JSON.stringify(data)
    })
    let dataJson=await request.json()
    console.log(dataJson)
    window.location.reload()
  }
  catch(err){
    console.log(err)
  }
}

async function editPetProfile(data,id){
  let token=JSON.parse(localStorage.getItem('user'))
  try{
    const request=await fetch(`${baseUrl}/pets/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${token.token}`
      },
      body:JSON.stringify(data)
    })
    let dataJson=await request.json()
    window.location.reload()

  }
  catch(err){
    console.log(err)
  }
}


export { getAllPets, login, register, getUserData, deleteProfile, updateProfile,registerPet,editPetProfile};