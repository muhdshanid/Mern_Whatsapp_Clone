import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AccountContext } from '../../../context/AccountProvider';
const ChatHeader = ({person}) => {
  const {activeUsers} =  useContext(AccountContext)
  return (
    <Box display={"flex"} alignItems='center' sx={{height:"44px",background:"#ededed",padding:"8px 16px"}}>
        <img style={{width:40,height:40,objectFit:"cover",borderRadius:"50%"}} src={person.picture} alt="dp" />
        <Box>
            <Typography sx={{marginLeft:"12px",}}>{person.name}</Typography>
            <Typography sx={{marginLeft:"12px",fontSize:"12px",color:"rgb(0,0,0,0.6)"}}>
              {activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Typography>
        </Box>
        <Box sx={{marginLeft:"auto"}}>
            <SearchIcon sx={{padding:"8px",fontSize:"24px",color:"#000"}}/>
            <MoreVertIcon sx={{padding:"8px",fontSize:"24px",color:"#000"}}/>
        </Box>
    </Box>
  )
}

export default ChatHeader