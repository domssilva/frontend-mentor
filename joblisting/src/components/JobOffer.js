import React from 'react';

import JobOfferTag from './JobOfferTag';

const JobOffer = props => {

  const data = props.data;

  return (
    <div className="feed__job" key={data.id}>
      <div className="feed__job--logo">
        <img src={data.logo} alt="company logo"/>
      </div>
      <div className="feed__job--position">
        <div>
          <div className="title">
            <h6>{data.company}</h6>
            {data.new && <button className="new">new!</button>}
            {data.featured && <button className="featured">featured</button>}
          </div>
          <h4>{data.position}</h4>
        </div>
        <div>
          <span>{data.postedAt}</span>
          <span>{data.contract}</span>
          <span>{data.location}</span>
        </div>
      </div>
      <div className="feed__job--languages">
        <JobOfferTag data={data.role} addTag={props.addTag} />
        <JobOfferTag data={data.level} addTag={props.addTag} />
        {data.languages.map(languages => <JobOfferTag data={languages} addTag={props.addTag}/>)}
        {data.tools.map(tools => <JobOfferTag data={tools} addTag={props.addTag}/>)}
      </div>
    </div>
  );
}

export default JobOffer;
