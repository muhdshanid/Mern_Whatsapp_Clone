import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { Box, InputBase } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { useEffect } from 'react';
import { uploadFile } from '../../../service/api';
const ChatFooter = ({sendText,setValue,value,file,setFile,setImage}) => {
  const onFileChange = (e) => {
    setFile(e.target.files[0])
    setValue(e.target.files[0].name)
  }
  useEffect(()=>{
    const getImage = async () => {
      if(file){
        const data = new FormData();
        data.append("name",file.name)
        data.append("file",file)
        let res = await uploadFile(data)
        setImage(res.data)
      }
    }
    getImage()
  },[file])
  return (
    <Box display={"flex"} alignItems='center' sx={{height:"40px",background:"#ededed",width:"100%",padding:"0 15px"}}>
        <EmojiEmotionsOutlinedIcon  sx={{margin:"5px",color:"#919191"}}/>
        <label htmlFor="fileInput">
        <AttachFileIcon  sx={{margin:"5px",color:"#919191",transform:"rotate(40deg)"}}/>
        </label>
        <input onChange={(e) =>onFileChange(e)} type="file" id='fileInput' style={{display:"none"}}/>
        <Box textAlign={"start"} sx={{background:"#fff",borderRadius:"18px",width:"84%",height:"25px",margin:"-2px 0 2px"}}>
            <InputBase value={value} onKeyPress={(e)=>sendText(e)} onChange={(e)=>setValue(e.target.value)} placeholder='Type a message' sx={{margin:"-4px 8px"}} color="#000"/>
        </Box>
        <MicIcon  sx={{margin:"5px",color:"#919191"}}/>
    </Box>
  )
}

export default ChatFooter