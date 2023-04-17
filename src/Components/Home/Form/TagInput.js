import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "./TagInput.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CustomCard from "../../../common/Card";
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
    // const new_data = jsonData.filter(
    //   (rec) => rec.Title.substr(0, 8) != "user_rec"
    // );
    console.log(jsonData);
    setData(jsonData);
  };

  return (
    <div>
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
        {active && data.length === 0 && (
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-5">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TagInput;
