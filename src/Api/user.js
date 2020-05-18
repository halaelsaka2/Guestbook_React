import axios from'axios';
const userEndPoint = "http://localhost:3000/user";

export async function RegisterUser(newUser) {
    const registerEndPoint = `${userEndPoint}/register`;
    const{data} =await axios.post(registerEndPoint,newUser);
    return data;
}

export async function LoginUser(currentUser) {
    const loginEndPoint = `${userEndPoint}/login`;
    const response =await axios.post(loginEndPoint,currentUser).catch(err=>console.log(err.massage));
    console.log(response.data);
    const {token ,user} = response.data;
    localStorage.setItem("token",token);
    localStorage.setItem("user",JSON.stringify(user));
  console.log(localStorage);
  
    return response.data;
}
export async function FindUserById(id) {
  const { data } = await axios.get(`${userEndPoint}/${id}`);
  return data;
}