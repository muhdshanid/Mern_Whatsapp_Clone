import { Box, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { downloadMedia, formatDate } from '../../../utils/common-utils'
import GetAppIcon from '@mui/icons-material/GetApp';
import {iconPDF} from '../../../constants/data'
const Message = ({message}) => {

   const {account} = useContext(AccountContext)
  return (
    <>
    {
        account.sub === message.senderId ?
        <Box display={"flex"} sx={{borderRadius:"10px",wordBreak:"break-word",background:"#dcf8c6",maxWidth:"60%",marginLeft:"auto",padding:'5px',width:"fit-content"}}>
        {
          message.type === 'file' ? <ImageMessage message={message}/>
           : <TextMessage message={message}/>
        }
        
       </Box>
       :
       <Box display={"flex"} sx={{borderRadius:"10px",wordBreak:"break-word",background:"#fff",maxWidth:"60%",padding:'5px',width:"fit-content"}}>
        {
          message.type === 'file' ? <ImageMessage message={message}/>
           : <TextMessage message={message}/>
        }
   </Box>
    }
  
   
   </>
  )
}

const ImageMessage = ({message}) => {
  return (
    <Box position={"relative"}>
      {
        message?.text?.includes(".pdf") ? 
        <Box display={"flex"} sx={{width:"300px"}}>
          <img style={{width:50}}  src={iconPDF} alt="pdf" />
          <Typography sx={{fontSize:"14px"}}>{message.text.split("/").pop()}</Typography>
        </Box>
        :
        <img style={{width:200,height:"100%",objectFit:'cover'}} src={message.text} alt={message.text} />
      }
              <Typography position={"absolute"} sx={{bottom:0,right:0,fontSize:"10px",color:"#919191",marginTop:"auto",wordBreak:"keep-all"}}>
                <GetAppIcon onClick={(e)=>downloadMedia(e,message.text)} fontSize='small' style={{marginRight:10,border:"1px solid grey",borderRadius:"50%"}}/>
                 {formatDate(message.createdAt)} </Typography>
    </Box>
  )
}
const TextMessage = ({message}) => {
  return (
    <>
    <Typography sx={{fontSize:"14px",padding:"0 25px 0 5px"}}>{message.text}</Typography>
        <Typography sx={{fontSize:"10px",color:"#919191",marginTop:"auto",wordBreak:"keep-all"}}> {formatDate(message.createdAt)} </Typography>
    </>
  )
}
export default Message