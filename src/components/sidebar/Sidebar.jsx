import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EventIcon from '@mui/icons-material/Event';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import { Users } from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";
const Sidebar = () => {
  return (
    <div className="sidebar">
          <div className="sidebarWrapper">
               <ul className="sidebarList">
                   <li className="sidebarListItem">
                          <RssFeedIcon className="sidebarIcon" />
                          <span className="sidebarListItemText">Feed</span>
                   </li>
                   <li className="sidebarListItem">
                          <ChatOutlinedIcon className="sidebarIcon" />
                          <span className="sidebarListItemText">Chats</span>
                   </li>
                   <li className="sidebarListItem">
                          <PlayCircleFilledOutlinedIcon className="sidebarIcon" />
                          <span className="sidebarListItemText">videos</span>
                   </li>
                   <li className="sidebarListItem">
                          <GroupOutlinedIcon className="sidebarIcon" />
                          <span className="sidebarListItemText">Groups</span>
                   </li>
                   <li className="sidebarListItem">
                          <BookmarkOutlinedIcon className="sidebarIcon" />
                          <span className="sidebarListItemText">Bookmarks</span>
                   </li>
                   <li className="sidebarListItem">
                          <HelpOutlineOutlinedIcon className="sidebarIcon" />
                          <span className="sidebarListItemText">Question</span>
                   </li>
                   <li className="sidebarListItem">
                          <WorkOutlineOutlinedIcon className="sidebarIcon" />
                          <span className="sidebarListItemText">Jobs</span>
                   </li>
                   <li className="sidebarListItem">
                          <EventIcon className="sidebarIcon" />
                          <span className="sidebarListItemText">Events</span>
                   </li>
                   <li className="sidebarListItem">
                          <SubscriptionsSharpIcon className="sidebarIcon" />
                          <span className="sidebarListItemText">Courses</span>
                   </li>
               </ul>
               <button className="sidebarButton">Show More</button>
               <hr className="sidebarHr"/>
               <ul className="sidebarFriendList">
          {Users.map(u=>(
            < CloseFriend key={u.id} user={u} />
          ))}
               </ul>
          </div>
    </div>
  )
}

export default Sidebar