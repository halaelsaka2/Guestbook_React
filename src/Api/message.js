import axios from 'axios'
const url = "https://guestbook-messages-2020.herokuapp.com/message";


//get All message by userId which logged in
export async function GetMessagesByUerId(id) {
    const token = localStorage.getItem("token");
    console.log(token);
    const { data } = await axios.get(`${url}/`, {
      headers: {
        authorization: token,
      },
    });
    return data;
}

export async function addMessage(value) {
  const token = localStorage.getItem("token");
  console.log(token+"from add message");
  const { data } = await axios.post(`${url}/addMessage`,{value}, {
    headers: {
      authorization: token,
    },
  });
  console.log(data);
  
  return data;
}

export async function deleteMessage(id) {
  const token = localStorage.getItem("token");
  console.log(token+"from add message");
  const { data } = await axios.delete(`${url}/${id}`, {
    headers: {
      authorization: token,
    },
  });
  console.log(data);
  return data;
}

export async function getMessageById(id) {
  const token = localStorage.getItem("token");
  const {data} = await axios.get(`${url}/${id}`,{
    headers:{
      authorization:token
    }
  });
  return data;
}
export async function editMessage(id,message) {
  const token = localStorage.getItem("token");
  // console.log(token+"from add message");
  const { data } = await axios.patch(`${url}/${id}`,message,{
    headers: {
      authorization: token,
    },
  });
  console.log(data);
  return data;
}

export async function addReply(id,reply) {
  const token = localStorage.getItem("token");
  console.log(reply+"from add reply");
  const { data } = await axios.patch(`${url}/addReply/${id}`,{reply},{
    headers: {
      authorization: token,
    },
  });
  console.log(data);
  return data;

  
}