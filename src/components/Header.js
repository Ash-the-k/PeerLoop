import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
      </HeaderSearch>
    </HeaderContainer>
  );
}

export default Header;

const HeaderSearch = styled.div``

const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--peerloop-color);
color: white;

`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
