import { Box, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation, setConversation } from '../../../service/api'
import { formatDate } from '../../../utils/common-utils'

const Conversation = ({user}) => {
    const {setPerson,account,newMessageFlag} = useContext(AccountContext) 
    const getUser = async() => {
        setPerson(user)
        await setConversation({senderId:account.sub,receiverId:user.sub})
    }
    const [message, setMessage] = useState({})
    useEffect(()=>{
        const getConversationDetails = async () => {
            const data = await getConversation({senderId:account.sub,receiverId:user.sub})
            setMessage({text:data?.message,timestamp:data?.updatedAt})
        }
        getConversationDetails()
    },[newMessageFlag])
  return (
    <Box onClick={() =>getUser()} display={"flex"} sx={{height:"45px",padding:"13px 0",cursor:"pointer"}}>
        <Box>
            <img style={{width:50,height:50,borderRadius:"50%",padding:"0 14px",objectFit:"cover"}} src={user.picture} alt="dp" />
        </Box>
        <Box  sx={{width:"100%"}}>
            <Box sx={{display:"flex"}}>
                <Typography>{user.name}</Typography>
                {
                    message?.text && 
                    <Typography sx={{fontSize:'12px',marginLeft:"auto",color:"green",marginRight:"20px",paddingTop:"20px"}}>{formatDate(message?.timestamp)}</Typography>
                }
            </Box>
            <Box>
                <Typography sx={{fontSize:'14px',color:"rgba(0,0,0,0.6)",marginTop:"0px"}}>{message?.text?.includes("localhost") ? "media" : message.text}</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Conversation