import { Box, Divider } from '@mui/material'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { getUsers } from '../../../service/api'
import Conversation from './Conversation'

const Conversations = ({inputs}) => {
  const {account,socket,setActiveUsers,activeUsers} = useContext(AccountContext)
    const [users, setUsers] = useState([])
    useEffect(()=>{
        const fetchData = async() => {
         let res =   await getUsers()
         const filterData = res.filter((user)=>user.name.toString().toLowerCase().includes(inputs.toLowerCase()))
         setUsers(filterData)
        }
        fetchData()
    },[inputs])
    useEffect(()=>{
      console.log("conversation useeffect called");
      console.log(account);
      socket.current.emit("addUser",account);
      socket.current.on("getUsers",userss => {
        setActiveUsers(userss)
    })
    },[account])
  return (
    <Box sx={{height:"81vh",overflow:"overlay"}}>
        {
            users.map((user) => (
              user.sub !== account.sub &&
              <>
                <Conversation user={user}/>
                <Divider sx={{margin:"0 0 0 70px",background:"#e9edef",opacity:".2"}}/>
                </>
            ))
        }
    </Box>
  )
}

export default Conversations