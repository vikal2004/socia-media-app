import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TagFacesIcon from '@mui/icons-material/TagFaces';
const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                {/* <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" /> */}
                <img src="https://scontent.fvns1-1.fna.fbcdn.net/v/t39.30808-6/298872917_108931288592284_7066128733424600752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BGekDDGnEBIAX_aH2rj&_nc_ht=scontent.fvns1-1.fna&oh=00_AfBsMiVBP38AjalWGH5Tmmqx07tCkrpGieHr6ecdrOPQdA&oe=655D5750" alt="" className="shareProfileImg" />
                <input placeholder="what's in your mind vikal?" 
                className="shareInput"
                />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
               <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <LocationOnIcon htmlColor="green"  className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <TagFacesIcon htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
               <button className="shareButton">share</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Share