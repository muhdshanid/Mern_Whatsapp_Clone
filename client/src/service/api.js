import axios from 'axios'
const URL = "http://localhost:8000"

export const addUser = async(data) => {

    try {
       await  axios.post(`${URL}/add`,data)
    } catch (error) {
        console.log("error while calling adduser api",error.message);
    }
}

export const getUsers = async () => {
    try {
      const res = await axios.get(`${URL}/users`)
      return res.data
    } catch (error) {
        console.log("error while calling getusers api",error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${URL}/conversation/add`,data)
    } catch (error) {
        console.log("error while calling setconversation api",error.message);
    }
}

export const getConversation = async (data) => {
    try {
      let res =   await axios.post(`${URL}/conversation/get`,data)
      return res.data
    } catch (error) {
        console.log("error while calling getconversation api",error.message);
    }
}


export const newMessage = async (data) =>{
    try {
        await axios.post(`${URL}/message/add`,data)
    } catch (error) {
        console.log("error while calling newmessage api",error.message);
    }
}

export const getMessages = async (id) =>{ 
    try {
        let res = await axios.get(`${URL}/message/get/${id}`)
        return res.data
    } catch (error) {
        console.log("error while calling getmessage api",error.message);
    }
}

export const uploadFile = async (data) => {
    try {
      return  await axios.post(`${URL}/file/upload`,data)
    } catch (error) {
        console.log("error while calling uploadfile api",error.message);
    }
}