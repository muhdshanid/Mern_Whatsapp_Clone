import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const HeaderMenu = ({setOpenDrawer}) => {
    const [open, setOpen] = useState(null)
    const handleClose= () => {
        setOpen(null)
    } 
    const handleClick= (e) => {
        setOpen(e.currentTarget)
    } 
     return (
    <>
          <MoreVertIcon onClick={handleClick}  sx={{marginLeft:"2px",padding:"8px",color:"#000"}} />
          <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:"center"
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:"right"
        }}
      >
        <MenuItem sx={{fontSize:"14px",padding:"5px 60px 5px 24px",color:"#4A4A4A"}} onClick={()=>{handleClose();setOpenDrawer(true);}}>Profile</MenuItem>
        <MenuItem sx={{fontSize:"14px",padding:"15px 60px 5px 24px",color:"#4A4A4A"}} onClick={handleClose}>My account</MenuItem>
        <MenuItem sx={{fontSize:"14px",padding:"15px 60px 5px 24px",color:"#4A4A4A"}} onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
} 

export default HeaderMenu