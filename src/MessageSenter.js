import { Avatar } from '@material-ui/core'
import React , {useState} from 'react'
import './MessageSenter.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from "firebase";
function MessageSenter() {
    const [{user} ,dispatch] = useStateValue();


    const [input , setInput] = useState('');
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add ({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
        setInput("");
        setImageUrl("");
    };
    return (
        <div className="messageSenter">
            <div className="messageSenter__top">
                <Avatar src={user.photoURL}/>
                <form>
                <input
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                className="messageSender__input" placeholder={`What's on your mind, ${user.displayName}?`}
                /> 
                <input 
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                placeholder="Image URL (Optional)"/> 
                <button onClick={handleSubmit} type="submit"> Hidden submit </button>
                </form>
            </div>
            <div className="messageSenter__bottom">
                <div className="messageSenter__option">
                <VideocamIcon style={{color: "red"}}/>
                <h3>Live Video</h3>
                </div>

                <div className="messageSenter__option">
                <PhotoLibraryIcon style={{color: "green"}}/>
                <h3>Photo/Video</h3>
                </div>
                
                <div className="messageSenter__option">
                <InsertEmoticonIcon style={{color: "orange"}}/>
                <h3>Feeling/Activity</h3>
                </div>    


            </div>
        </div>
    )
}

export default MessageSenter
