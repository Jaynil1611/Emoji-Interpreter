import React, { useState } from "react";
import "./styles.css";
import { emojiDictionary } from "./emojiDictionary.js";
import Emoji from "./images/Emoji.png";
import search from "./images/search.png";

const emojisInDB = Object.keys(emojiDictionary);

const chosenStyle = {
  cursor: "pointer",
  backgroundColor: "#0F766E",
  borderRadius: "0.5rem"
};

export default function App() {
  const [meaning, setMeaning] = useState(null);

  const [chosenEmojiIndex, setChosenEmojiIndex] = useState(-1);

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const getMeaningFromEmoji = (emoji, index) => {
    if (emoji in emojiDictionary) {
      setMeaning(emojiDictionary[emoji]);
      setChosenEmoji(emoji);
      setChosenEmojiIndex(index);
    } else {
      setMeaning("Sorry, we couldn't recognise this emoji");
      setChosenEmojiIndex(-2);
    }
  };

  function inputHandler(event) {
    let emoji = event.target.value;
    if (emoji) {
      getMeaningFromEmoji(emoji);
    } else {
      setChosenEmojiIndex(-1);
    }
  }

  return (
    <div className="App">
      <img src={Emoji} className="image"></img>
      <div>
        <h1>
          EmojiSearch
          <span>
            <img src={search} className="search-image"></img>
          </span>
        </h1>
      </div>
      <h5>
        Recognising all the different emoji's becomes a difficult task.
        EmojiSearch provides an easy interface to fins the find the meaning of
        emoji's instantly.
      </h5>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="Please enter any object emoji"
      ></input>
      <div>
        {chosenEmojiIndex !== -1 ? (
          <div className="meaning-div">
            {chosenEmoji} {meaning}
          </div>
        ) : (
          <div className="meaning-div">
            Search for object emoji below or put it above
          </div>
        )}
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
