import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "./TagInput.css";
import { useState } from "react";
import CustomCard from "../../../common/Card";
import Loader from "./Loader";
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function TagInput() {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [active, setActive] = useState(false);
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
  // handlec Click , it sets the data using useState hook as well as fetches from the server.py
  const handleClick = async () => {
    setData([]);

    const tagsArray = tags.map((item) => item.text);
    setActive(true);
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
    <div>
      {/* Skills animation and input field */}
      <div className="tag-inp">
        <h1 className="text-white text-5xl pb-4">Enter your Skills </h1>
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
            placeholder="Enter skills separated by ,"
            autofocus={false}
          />
        </div>
        <button
          onClick={handleClick}
          className="mt-6 bg-[#82e292] hover:bg-[#00242c] hover:text-[#82e292] hover:border-2 hover:border-[#82e292] text-[#00242c] font-bold py-2 px-4 rounded"
        >
          Get recommendations!
        </button>
      </div>
      <div className="p-3">
        {/* After data is loaded to the useState */}
        {data.length > 0 && active && (
          <div className="text-white">
            <h2 className="text-white text-5xl pb-4">
              Your Recommendations :{" "}
            </h2>
            <div className="flex flex-wrap justify-content-evenly">
              {data.map((item) => (
                <div key={item.Sno + Math.random()} className="p-2">
                  <CustomCard
                    Title={item.Title}
                    rating={item.Stars}
                    link={item.Link}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Loading animation */}
        { active && data.length === 0 && (
          <div className="flex justify-content-evenly" >
            <Loader />
            <Loader />
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}

export default TagInput;
