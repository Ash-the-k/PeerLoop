import AddIcon from '@material-ui/icons/Add';
import AppsIcon from "@material-ui/icons/Apps";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import InboxIcon from "@material-ui/icons/Inbox";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CreateIcon from '@mui/icons-material/Create';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { collection } from 'firebase/firestore';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from "styled-components";
import { db } from '../firebase';
import SidebarOption from './SidebarOption';

const SideBar = () => {
  const [channels, loading, error] = useCollection(collection(db, 'rooms'));

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>PEERLOOP</h2>
          <h3>
            <FiberManualRecordIcon />
            PeerLoop Haven
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>

      {/* Static Options */}
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />

      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />

      {/* Dynamic Channels */}
      {channels?.docs.map((doc) => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
        />
      ))}

      {/* Add Channel Option */}
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  background-color: #bfecff;
  height: 100vh;
  flex: 0.4;
  color: black;
  max-width: 250px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49270b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ffcc;
  padding: 13px;
`;

const SideBarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-right: 2px;
    color: green;
  }
`;
