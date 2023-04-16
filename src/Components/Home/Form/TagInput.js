import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "./TagInput.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function TagInput() {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  //   useEffect(() => {
  //     handleClick();
  //   }, []);
  const handleClick = async () => {
    const tagsArray = tags.map((item) => item.text);
    // console.log(tagsArray);
    // window.alert(tagsArray);
    console.log(JSON.stringify({ arg: tagsArray }));
    const response = await fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ arg: tagsArray }),
    });
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
  };

  return (
    <div className="tag-inp">
      <h1 className="text-white text-5xl pb-4"> Skills </h1>
      <div>
        <ReactTags
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
      </div>
      <button
        onClick={handleClick}
        className="mt-6 bg-[#82e292] hover:bg-[#00242c] hover:text-[#82e292] hover:border-2 hover:border-[#82e292] text-[#00242c] font-bold py-2 px-4 rounded"
      >
        Get recommendations!
      </button>
      <div className="text-white">
        <h2 className="text-white text-5xl pb-4">Your Recommendations : </h2>
        <div className="flex flex-wrap">
          {data.map((item) => (
            <div key={item.Sno + Math.random()}>
              <Card Title="Hello" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagInput;
