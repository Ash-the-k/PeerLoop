import { addDoc, collection } from 'firebase/firestore'; // Import these
import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

function SidebarOption({ Icon, title, addChannelOption, id}) {
  const addChannel = async () => {
    const channelName = prompt('Please enter the channel name');
    if (channelName) {
      await addDoc(collection(db, 'rooms'), {
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    
  };

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? <h3>{title}</h3> : <SidebarOptionChannel># {title}</SidebarOptionChannel>}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
