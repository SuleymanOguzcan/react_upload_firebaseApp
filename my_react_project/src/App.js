import "./App.css";
import { Button} from "@mui/material";
import { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";


function App() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [text, setText] = useState('New title');


  const handleTextClick = () => {
    setText('');
  };

  const handleImageChange = (e) => {
    
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      
      <div className="text" id="Kkk" onClick={handleTextClick} contentEditable={true}>
        {text}
      </div>
      <br/>
      <div className="oo">
      <textarea
        id="yeni" className="text-box" placeholder="New Description"
       />
       </div>
       <br/>
      <img src={url} alt="" width="300" height="300"></img>
      
      <input type="file" id="file" src={url}  onChange={handleImageChange} />

      <br/>
      <span id="ee"><label for= "file" id="ell">+  </label></span>
      <p >GÖRSEL</p>
      
      <br/>
      <Button variant="contained" color="success"  onClick={handleSubmit}> mui buton
      <br/>firebase upload</Button>
      
    </div>
  );
}

export default App;