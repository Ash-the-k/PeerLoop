import React from "react"
import styled from "styled-components"
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {
  return (
    <HeaderContainer>
        <h1>Hello</h1>
        <HeaderLeft>
          <HeaderAvatar            
          />
          <AccessTimeIcon
          />
        </HeaderLeft>
        
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``

