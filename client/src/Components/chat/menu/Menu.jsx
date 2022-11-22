import { Box } from '@mui/material'
import React, { useState } from 'react'
import Conversations from './Conversations'
import Conversation from './Conversations'
import Header from './Header'
import Search from './Search'

const Menu = () => {
  const [inputs, setInputs] = useState("")
  return (
    <Box>
      <Header/>
      <Search setInputs={setInputs}/>
      <Conversations inputs={inputs}/>
    </Box>
  )
}

export default Menu 