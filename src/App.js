import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
// import DatePicker from './DatePicker'

function App() {
  const [pictures, setPictures] = useState('');
  const [datePicker, setDatePicker] = useState('');
  const [media, setMedia] = useState('');

  console.log(datePicker);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=jgD7VjRtm7bd4pN1T7Nid7FKA5Vcu9gbhbB3EIqk&date=${datePicker}`)
      .then(pic => {
        console.log(pic);
        if (pic.status === "error") {
          return;
        }
        setMedia(pic.data.media_type)
        setPictures(pic.data.url);
      })
      .catch(err => console.log("noooo"));

  }, [datePicker]);

  return (
    <div className="App">
      {media === "video" ? 
      <iframe 
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="900"
        height="600"
        src={pictures}>
      </iframe> 
      :
      <img 
        alt="nasa pictures and videos"
        src={pictures}
        width="900"
        height="600">
      </img>
      }
      <div>
        <input 
          onChange={e => setDatePicker(e.target.value)}
          type="date"
        />
      </div>
    </div>
  );
}

export default App;
