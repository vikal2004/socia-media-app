import "./profile.css"
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
const Profile = () => {
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
        <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
        {/* <img src="assets/person/7.jpeg" alt="" className="profileUserImg" /> */}
        <img className="profileUserImg"  src="https://scontent.fvns1-1.fna.fbcdn.net/v/t39.30808-6/298872917_108931288592284_7066128733424600752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BGekDDGnEBIAX_aH2rj&_nc_ht=scontent.fvns1-1.fna&oh=00_AfBsMiVBP38AjalWGH5Tmmqx07tCkrpGieHr6ecdrOPQdA&oe=655D5750" alt="" />
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">Vikal singh</h4>
          <h4 className="profileInfoDesc">Hello!! my Friends</h4>
        </div>
      </div>
      <div className="profileRightBottom">
       <Feed />
       <Rightbar />
      </div>
    </div>
    </div>
    </>
  )
}

export default Profile