import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';
import { useState } from 'react';
const Header = () => {
  const {account} = useContext(AccountContext)
  const [openDrawer, setOpenDrawer] = useState(false)
  const  toggleDrawer = () => {
    setOpenDrawer(true)
  }
  return (
    <>
    <Box display={"flex"} alignItems='center' sx={{height:"44px",background:"#ededed",padding:"8px 16px"}}>
        <img onClick={() =>toggleDrawer()} style={{height:40,width:40,borderRadius:"50%"}} src={account.picture} alt="dp" />
        <Box sx={{marginLeft:'auto'}}>
            <ChatIcon sx={{marginLeft:"2px",padding:"8px",color:"#000",fontSize:"22px",marginRight:"8px",marginTop:"3px"}} />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Box>
    </Box>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}

export default Header