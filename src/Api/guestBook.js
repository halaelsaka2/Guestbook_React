import axios from "axios";

const url = "http://localhost:3000/guestbook";



export async function AddnewGuestbook() {
  const token = localStorage.getItem("token");
  console.log(token);
  const {data} = await axios.post(`${url}/addguestbook`,{}, {
    headers:{
      authorization:token
    }
  });
  return data;
}

export async function getGuestByUserId(userId) {
  const token = localStorage.getItem("token");
  // console.log(token);
  const { data} = await axios.get(`${url}/${userId}`,{
    headers: {
      authorization: token,
    },
  });
  return data;
}


export async function getAllOtherGuest() {
  const token = localStorage.getItem("token");
  console.log(token);
  const {
    data
  } = await axios.get(`${url}/`, {
    headers: {
      authorization: token,
    },
  });
  return data;
}

export async function updateGuestbook(id, message) {
  const token = localStorage.getItem("token");
  // console.log(token);
  const {data} = await axios
    .patch(`${url}/${id}`, {message}, {
      headers: {
        authorization: token,
      },
    })
    .catch((err) => {console.log(err)});
  return data
}