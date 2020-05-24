import React from 'react';

import './tags.css';

const Tags = props => {

  const tagStats = props.selectedTags;

  return (
    <div className={tagStats.hidden ? 'feed__tags closed' : 'feed__tags'}>
      <div className="feed__tags--selected">
        {tagStats.addedTags.map(tag => {
          return (
            <div className="feed__tags--btn">
              <span>{tag}</span>
              <button onClick={() => props.removeTag(tag)}>X</button>
            </div>
          );
        })}
      </div>
      <div className="feed__tags--clear">
        <span onClick={() => props.clearTags()}>clear</span>
      </div>
    </div>
  );
}

export default Tags;