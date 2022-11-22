import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';
const drawerStyled = {
    left:20,
    top:17,
    height:"95%",
    width:"31.2%",
    boxShadow:"none",
    marginTop:"-3px",
    marginLeft:"-10px"
}
const InfoDrawer = ({open,setOpen}) => {
  const  handleClose = () => {
    setOpen(false)
  }
  return (
    <Drawer  open={open} onClose={handleClose} PaperProps={{sx:drawerStyled}} style={{zIndex:1500}}>
        <Box display={"flex"} sx={{background:"#008069",height:"76px",color:"#fff"}}>
            <ArrowBackIcon sx={{marginTop:"auto",padding:"15px",fontWeight:"600"}} onClick={()=>setOpen(false)}/>
            <Typography sx={{marginTop:"auto",padding:"15px",fontWeight:"600",fontSize:"18px"}}>Profile</Typography>
        </Box>
        <Box sx={{backgroundColor:"#ededed"}}>
            <Profile/>
        </Box>
    </Drawer>
  )
}

export default InfoDrawer