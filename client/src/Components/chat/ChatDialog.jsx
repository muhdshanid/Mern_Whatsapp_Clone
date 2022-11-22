import { Box, Dialog } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import ChatBox from './chat/ChatBox'
import EmptyChat from './chat/EmptyChat'
import Menu from './menu/Menu'
const dialogStyle = {
    height:"95%",
    width:"100%",
    marginRight:"10px",
    marginLeft:"10px",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overflow:"hidden",
    borderRadius:0
}
const ChatDialog = () => {
    const {person} = useContext(AccountContext)
  return (
    <Dialog maxWidth={"md"} PaperProps={{sx:dialogStyle}}  open={true}  hideBackdrop={true}>
        <Box display={"flex"} >
            <Box sx={{minWidth:"400px"}}>
                <Menu/>
            </Box>
            <Box sx={{width:"73%",minWidth:"300px",height:"100%",borderLeft:"1px solid rgb(0, 0 ,0, 0.14)"}}>
                {
                    Object.keys(person).length ? 
                    <Box sx={{marginTop:'25px'}}>
                    <ChatBox/> 
                    </Box>
                    :
                    <EmptyChat/> 
                }
            </Box>
        </Box>
    </Dialog>
  )
}

export default ChatDialog