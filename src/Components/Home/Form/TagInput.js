import React, { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input';
import { render } from 'react-dom';
import './TagInput.css';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function TagInput() {
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
        console.log('The tag at index ' + index + ' was clicked');
    };

    function handleClick() {
        const tagsArray = tags.map(item => item.text);
        // console.log(tagsArray);
        window.alert(tagsArray);
    }

    return (
        <div className="tag-inp">
            <h1 className='text-white text-5xl pb-4'> Skills </h1>
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
            <button onClick={handleClick} className="mt-6 bg-[#82e292] hover:bg-[#00242c] hover:text-[#82e292] hover:border-2 hover:border-[#82e292] text-[#00242c] font-bold py-2 px-4 rounded">
                Get recommendations!
            </button>
        </div>
    )
}

export default TagInput