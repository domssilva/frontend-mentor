import React from 'react';

import './feed.css';

import Tags from './Tags';
import JobOffer from './JobOffer';

import FilterJobOffersByTags from '../tasks/FilterJobOffersByTags';

const Feed = props => {

  const appState = props.state;
  const selectedTags = appState.tags.addedTags;
  
  return(
    <section className="feed">  
      <Tags 
        selectedTags={appState.tags}
        removeTag={props.removeTag}
        clearTags={props.clearTags}
      />
      <section className="feed__job--container">
        {appState.jobs.map(offer => FilterJobOffersByTags(offer, selectedTags) ? <JobOffer data={offer} addTag={props.addTag}/> : null)}
      </section>
    </section>
  );
}

export default Feed;
