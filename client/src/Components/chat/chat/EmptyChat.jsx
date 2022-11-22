import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { emptyChatImage } from '../../../constants/data'

const EmptyChat = () => {
  return (
    <Box sx={{background:"#f8f9fa",padding:"30px 0",textAlign:"center",height:"100vh"}}>
      <Box sx={{padding:"0 100px"}}>
        <img style={{width:400,marginTop:10}} src={emptyChatImage} alt="empty" />
        <Typography sx={{color:"#41525d",fontSize:"32px",margin:"10px 0 10px 0",fontFamily:'inherit',fontWeight:"300"}}>WhatsApp Web</Typography>
        <Typography sx={{fontSize:"14px",color:"#667781",fontWeight:"400",fontFamily:"inherit"}} >Now send and receive messages without keeping your phone online.</Typography>
        <Typography sx={{fontSize:"14px",color:"#667781",fontWeight:"400",fontFamily:"inherit"}}>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Typography>
        <Divider sx={{margin:"20px 0",opacity:"0.4"}}/>
      </Box>
      <Box></Box>
    </Box>
  )
}

export default EmptyChat