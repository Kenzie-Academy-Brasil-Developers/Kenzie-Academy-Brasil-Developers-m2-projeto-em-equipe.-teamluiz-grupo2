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
      window.location.replace("/src/page/user.html");
    }else{
    
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

const baseUrl = "https://m2-api-adot-pet.herokuapp.com";

async function deleteUser (token) {
  try {
    const request = await fetch(`${baseUrl}/users/profile`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (request.ok) {
      console.log("Profile deleted!");
    }
  } catch (error) {}
};

async function updateUser (token, body) {
  try {
    const request = await fetch(`${baseUrl}/users/profile`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (request.ok) {
      console.log("Updated profile!");
    }

  } catch (error) {
    
  }
}



export { login, register, getUserData, deleteUser, updateUser };
