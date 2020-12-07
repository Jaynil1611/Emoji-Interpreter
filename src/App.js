import React, { useState } from "react";
import "./styles.css";
import { emojiDictionary } from "./emojiDictionary.js";

const emojisInDB = Object.keys(emojiDictionary);

const chosenStyle = {
  cursor: "pointer",
  backgroundColor: "#334155",
  borderRadius: "0.5rem"
};

export default function App() {
  const [meaning, setMeaning] = useState(
    "Search for object emoji below or put it above"
  );

  const [chosenEmojiIndex, setChosenEmojiIndex] = useState(-1);

  const getMeaningFromEmoji = (emoji, index) => {
    if (emoji in emojiDictionary) {
      setMeaning(emojiDictionary[emoji]);
      setChosenEmojiIndex(index);
    } else {
      setMeaning("Sorry, we couldn't recognise this emoji");
      setChosenEmojiIndex(-1);
    }
  };

  function inputHandler(event) {
    let emoji = event.target.value;
    if (emoji) {
      getMeaningFromEmoji(emoji);
    } else {
      alert("Please enter an emoji");
    }
  }

  return (
    <div className="App">
      <div>
        <img src="./Emoji.png"></img>
        <h1>EmojiSearch</h1>
      </div>
      <h5>
        Recognising all the different emoji's becomes a difficult task.
        EmojiSearch provides an easy interface to fins the find the meaning of
        emoji's instantly.
      </h5>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="Please enter your emoji..."
      ></input>
      <div className="meaning-div">
        {emojisInDB[chosenEmojiIndex]} {meaning}
      </div>
      <div>
        <br />
        Here are the most used object emoji's used by users around the world
        <ul className="list-non-bullet">
          {emojisInDB.map((emoji, index) => {
            return (
              <li
                className="list-item-inline"
                style={chosenEmojiIndex === index ? chosenStyle : null}
                onClick={() => getMeaningFromEmoji(emoji, index)}
                key={emoji}
              >
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
