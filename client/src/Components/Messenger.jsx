import React from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";
const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Wrapper = styled(Box)`
  background: #dcdcdc;
  height: 100vh;
`;
const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Wrapper>
      {account ? (
        <>
        <AppBar sx={{height:"90px",background:"#00A884",boxShadow:"none"}}>
       <Toolbar></Toolbar>
        </AppBar>
        <ChatDialog />
        </>
      ) : (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <LoginDialog />
        </>
      )}
    </Wrapper>
  );
};

export default Messenger;
