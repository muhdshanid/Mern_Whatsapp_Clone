import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { Socket } from 'socket.io-client'
import { AccountContext } from '../../../context/AccountProvider'
import { getMessages, newMessage } from '../../../service/api'
import ChatFooter from './ChatFooter'
import Message from './Message'

const Messages = ({person,conversation}) => {
  const {account,socket,newMessageFlag,setNewMessageFlag} = useContext(AccountContext)
  const [value, setValue] = useState("")
  
  const [messages, setMessages] = useState([])
  const [file, setFile] = useState()
  const [image, setImage] = useState("")
  const scrollRef = useRef()
  const [incomingMessage, setIncomingMessage] = useState(null)
  useEffect(()=>{
    socket.current.on("getMessage",data => {
      setIncomingMessage({
        ...data,
        createdAt:Date.now()
      })
    })
  },[])
  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition:"smooth"})
  },[messages])
  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
    setMessages(prev => [...prev,incomingMessage])
  },[incomingMessage,conversation])
  useEffect(() => {
    const getMessageDetails = async() =>{
     let data = await getMessages(conversation._id)
     setMessages(data)
    }
  conversation._id && getMessageDetails()
  },[person?._id,conversation?._id,newMessageFlag])
  const sendText =async (e) =>{
    const code = e.keyCode || e.which
    if(code === 13){
      let message = {}
      if(!file){
         message = {
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:"text",
          text:value
        }
      }else{
         message = {
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:"file",
          text:image
        }
      }

      socket.current.emit("sendMessage",message)
     
    await  newMessage(message)
    setValue("")
    setFile("")
    setImage("")
    setNewMessageFlag(prev => !prev)
    }
  }
  return (
    <Box sx={{backgroundImage:`url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`}}>
        <Box sx={{height:"78vh",overflowY:"scroll"}}>
          {
            messages && messages.map((message)=>(
              <Box ref={scrollRef} sx={{padding:"1px 80px"}}>
              <Message message={message}/>
              </Box>
            ))
          }
        </Box>
        <ChatFooter setImage={setImage} sendText={sendText} setValue={setValue} value={value} setFile={setFile} file={file}/>
    </Box>
  )
}

export default Messages