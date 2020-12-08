import React, { useState } from "react";
import "./styles.css";
import { emojiDictionary } from "./emojiDictionary.js";
import Emoji from "./images/Emoji.png";
import search from "./images/search.png";

const emojisInDB = Object.keys(emojiDictionary);

const chosenStyle = {
  cursor: "pointer",
  backgroundColor: "#0F766E",
  borderRadius: "0.5rem",
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
      setChosenEmoji(null);
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
      <img src={Emoji} className="image" alt="Emoji"></img>
      <div>
        <h1>
          EmojiSearch
          <span>
            <img src={search} className="search-image" alt="search"></img>
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
            Search for emoji below or enter one above
          </div>
        )}
      </div>
      <div className="display-emoji">
        Here are the most used object emoji's used by users around the world
        <ul className="list-non-bullet-emoji">
          {emojisInDB.map((emoji, index) => {
            return (
              <li
                className="list-item-inline-emoji"
                style={chosenEmojiIndex === index ? chosenStyle : null}
                onClick={() => getMeaningFromEmoji(emoji, index)}
                key={emoji}
              >
                {emoji}
              </li>
            );
          })}
        </ul>
        <ul className="list-non-bullet-social">
          <li className="list-item-inline-social">
            <a
              href="https://www.linkedin.com/in/jaynilgaglani/"
              className="link"
            >
              <i className="bx bxl-linkedin bx-sm"></i>
            </a>
          </li>
          <li className="list-item-inline-social">
            <a href="https://twitter.com/JAYNIL1611" className="link">
              <i className="bx bxl-twitter bx-sm"></i>
            </a>
          </li>
          <li className="list-item-inline-social">
            <a href="https://github.com/Jaynil1611" className="link">
              <i className="bx bxl-github bx-sm"></i>
            </a>
          </li>
          <li className="list-item-inline-social">
            <a
              href="https://www.instagram.com/jaynil_gaglani/"
              className="link"
            >
              <i className="bx bxl-instagram bx-sm"></i>
            </a>
          </li>
          <li className="list-item-inline-social">
            <a href="mailto:g.jaynil2401@gmail.com" className="link">
              <i className="bx bx-envelope bx-sm"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
