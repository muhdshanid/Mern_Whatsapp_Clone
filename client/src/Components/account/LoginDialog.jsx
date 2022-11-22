
import { Dialog, List, ListItem, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {GoogleLogin} from '@react-oauth/google'
import React from 'react'
import jwt_decode from 'jwt-decode'
import { qrCodeImage } from '../../constants/data'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { addUser } from '../../service/api'
const dialogStyle = {
    height:"96%",
    marginTop:"12%",
    width:"70%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overflow:"hidden"
}
const Component = styled(Box)`
   display:flex;
`
const Container = styled(Box)`
   padding:50px 0 56px 56px
`
const QRcode = styled("img")({
    height:264,
    widht:264,
    margin:"50px 50px 0 50px",
})

const Title = styled(Typography)`
    font-size:26px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:25px

`
const LoginDialog = () => {
    const {setAccount} = useContext(AccountContext)
    const onLoginSuccess = async(res) =>{
       const decoded =  jwt_decode(res.credential);
       setAccount(decoded)
      await addUser(decoded)
    }
    const onLoginError = (res) =>{
        console.log("Login failed",res); 
    }
  return (
    <Dialog PaperProps={{sx:dialogStyle}}  open={true}  hideBackdrop={true}>
        <Component>
            <Container>
                <Title>To use WhatsApp on your computer:</Title>
                <List>
                    <ListItem  sx={{padding:"0",marginTop:"15px",fontSize:"18px",lineHeight:"28px",color:"#4a4a4a"}}>1.Open WhatsApp on your phone</ListItem>
                    <ListItem  sx={{padding:"0",marginTop:"15px",fontSize:"18px",lineHeight:"28px",color:"#4a4a4a"}}>2.Tap Menu Settings and select Whatsapp Web</ListItem>
                    <ListItem  sx={{padding:"0",marginTop:"15px",fontSize:"18px",lineHeight:"28px",color:"#4a4a4a"}}>3.Point your phone to this screen to capture the code</ListItem>
                </List>
            </Container>
            <Box sx={{position:"relative"}}>
                <QRcode src={qrCodeImage} alt="qrcode" />
                <Box sx={{position:"absolute",top:"50%",transform:"translateX(30%)"}}>
                    <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}/>
                </Box>
            </Box>
        </Component>
    </Dialog>
  )
}

//595990839677-rnufgvuvsdetkup6h3d9lljg0ufi7jsf.apps.googleusercontent.com
//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

export default LoginDialog