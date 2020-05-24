import React from 'react';

const JobOfferTag = props => {
  return (
    <span className="tag" onClick={() => {
      props.addTag(props.data)}}>
        {props.data}
    </span>
  )
}

export default JobOfferTag;