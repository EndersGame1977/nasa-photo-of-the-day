import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import DatePicker from "./DatePicker";
import Explanation from "./Explanation";
// import DatePicker from './DatePicker'

function App() {
  const [pictures, setPictures] = useState('');
  const [datePicker, setDatePicker] = useState('');
  const [media, setMedia] = useState('');
  const [explanation, setExplanation] = useState('');

  console.log(datePicker);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=jgD7VjRtm7bd4pN1T7Nid7FKA5Vcu9gbhbB3EIqk&date=${datePicker}`)
      .then(pic => {
        console.log(pic);
        if (pic.status === "error") {
          return;
        }
        setMedia(pic.data.media_type);
        setPictures(pic.data.url);
        setExplanation(pic.data.explanation);
      })
      .catch(err => console.log("noooo"));

    }, [datePicker]);
    
    return (
      <div>
      <div className="flex flex-wrap justify-center">
        <div className="flex ">
          <DatePicker datePicker={setDatePicker}  />
        </div>
      </div>
      <div className="flex">
      {media === "video" ? 
      <div className="w-1/2">
        <iframe 
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="300"
          height="200"
          src={pictures}>
        </iframe>
      </div> 
      :
      <div className="w-1/2">
        <img 
          alt="nasa pictures and videos"
          src={pictures}
          width="300"
          height="200">
        </img>
      </div>
      }
      <div className="w-1/2">
       <Explanation explanation={explanation}/>
      </div>
      </div>
      </div>
  );
}

export default App;
