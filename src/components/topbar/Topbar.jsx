import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">DuniyaDekho</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input type="text" 
          className="searchInput" 
          placeholder="Search for friend , post or video" />
            </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
              <ChatIcon />
              <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
              <NotificationsNoneOutlinedIcon />
              <span className="topbarIconBadge">1</span>
              </div>
          </div>
          {/* <img className="topbarImg" src="/assets/person/1.jpeg" alt="" /> */}
          <img className="topbarImg" src="https://scontent.fvns1-1.fna.fbcdn.net/v/t39.30808-6/298872917_108931288592284_7066128733424600752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BGekDDGnEBIAX_aH2rj&_nc_ht=scontent.fvns1-1.fna&oh=00_AfBsMiVBP38AjalWGH5Tmmqx07tCkrpGieHr6ecdrOPQdA&oe=655D5750" alt="" />
        </div>
    </div>
  )
}

export default Topbar