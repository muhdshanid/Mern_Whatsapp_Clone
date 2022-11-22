import { Box, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'

const Profile = () => {
  const {account} = useContext(AccountContext)
  return (
    <>
    <Box display={"flex"} justifyContent={"center"} sx={{padding:2}}>
        <img src={account.picture} alt="dp" style={{width:150,height:150,borderRadius:"50%"}} />
    </Box>
    <Box sx={{background:"#fff",padding:"8px 30px 2px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"}}>
        <Typography sx={{color:"#009688",fontSize:"13px",fontWeight:"200"}}>Your name</Typography>
        <Typography sx={{margin:"10px 0",color:"#4A4A4A"}}>{account.name}</Typography>
    </Box>
    <Box sx={{padding:"15px 20px 20px 30px"}}>
        <Typography sx={{fontSize:"13px",color:"#8696a0"}}>This is not your username or pin. This name will be visible to your Whatsapp contacts.</Typography>
    </Box>
    <Box sx={{background:"#fff",padding:"8px 30px 2px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)",height:"60px"}} >
        <Typography sx={{color:"#009688",fontSize:"13px",fontWeight:"200"}}>About</Typography>
        <Typography sx={{margin:"8px 0",color:"#4A4A4A"}}>Eat! Sleep! Code! Repeat</Typography>
    </Box>
    <Box sx={{height:"65px",width:"65px"}}>

    </Box>
    </>
  )
}

export default Profile