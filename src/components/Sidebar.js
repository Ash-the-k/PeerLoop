import React from 'react'
import styled from 'styled-components';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
            <h2>PeerLoop Haven</h2>
            <h3>
                <FiberManualRecordIcon />
                Kushagra Shukla

            </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.dev`

`;
