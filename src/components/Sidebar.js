import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

const SideBar = () => {
  return (
    <SideBarContainer>
        <SideBarHeader>
            <SideBarInfo>
                <h2>PEERLOOP</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    PeerLoop Haven
                </h3>
            </SideBarInfo>
          <CreateIcon />
        </SideBarHeader>
      
      
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer= styled.div`
background-color: #BFECFF ;
height: 100vh;
flex:0.4;
color:black;
border-top: 0px solid #49274b;
max-width: 250px;
margin-top: 60px;
`;
const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #FFCCEA;
  padding: 13px;
  
  > .MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SideBarInfo = styled.div`
    flex:1;

    >h2{
      font-size: 15px;
      font-weight: 900;
      margin-bottom: 5px;
    }


    >h3{
      display: flex;
      font-size: 13px;
      font-weight: 400;
      align-items: center;

    }

    > h3 > .MuiSvgIcon-root {
      font-size: 14px;
      margin-top : 1px;
      margin-right : 2px;
      color: green;
    }
`;

