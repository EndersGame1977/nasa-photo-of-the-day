import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import DatePicker from "./DatePicker";
import Explanation from "./Explanation";
import Title from "./Title";
import { Container, Image, Segment, Modal } from "semantic-ui-react";

function App() {
  const [pictures, setPictures] = useState("");
  const [datePicker, setDatePicker] = useState("");
  const [media, setMedia] = useState("");
  const [explanation, setExplanation] = useState("");
  const [title, setTitle] = useState("");

  console.log(datePicker);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=jgD7VjRtm7bd4pN1T7Nid7FKA5Vcu9gbhbB3EIqk&date=${datePicker}`
      )
      .then(pic => {
        console.log(pic);
        if (pic.status === "error") {
          return;
        }
        setMedia(pic.data.media_type);
        setPictures(pic.data.url);
        setExplanation(pic.data.explanation);
        setTitle(pic.data.title);
      })
      .catch(err => console.log("noooo"));
  }, [datePicker]);

  return (
    <Container>
      <div>
        <DatePicker datePicker={setDatePicker} />
      </div>
      <Segment>
        {media === "video" ? (
          <div>
            <iframe
              id="inlineFrameExample"
              title={title}
              src={pictures}
              size="small"
              floated="left"
              href={pictures}
            />
          </div>
        ) : (
          <Modal
            size="fullscreen"
            trigger={
              <Image alt={title} src={pictures} size="small" floated="left" />
            }
          >
            <Modal.Content>
              <Image alt={title} src={pictures} />
            </Modal.Content>
          </Modal>
        )}
        <div>
          <Title title={title} />
          <Explanation explanation={explanation} />
        </div>
      </Segment>
    </Container>
  );
}

export default App;
