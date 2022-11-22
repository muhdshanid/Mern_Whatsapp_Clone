import { Box } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../service/api'
import ChatHeader from './ChatHeader'
import Messages from './Messages'


const ChatBox = () => {
  const [conversation, setConversation] = useState({})
   const {person,account} = useContext(AccountContext)
   useEffect(()=>{
    const getConversationDetails = async() => {
     let data =  await getConversation({senderId:account.sub,receiverId:person.sub})
     setConversation(data)
    }
    getConversationDetails()
   },[person.sub])
  return (
    <Box sx={{height:"75%"}} >
        <ChatHeader person={person}/>
        <Messages person={person} conversation={conversation}/>
    </Box>
  )
}

export default ChatBox