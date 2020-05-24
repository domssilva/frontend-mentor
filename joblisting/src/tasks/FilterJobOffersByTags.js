const FilterJobOffersByTags = function(offer, selectedTags) {
  /*
    Returns true if any selectedTag element is present
    in the offer object.
  */
  
  let matchCount = 0;
  let {role, level, languages, tools} = offer;
    
  if (selectedTags.length > 0) {
  for (let i = 0; i < selectedTags.length; i++) {
    if (selectedTags[i] === role || selectedTags[i] === level) {
      matchCount++;
    }
  

    // check for tool tag match
    for (let toolI = 0; toolI < tools.length; toolI++) {
      if (selectedTags[i] === tools[toolI]) {
        matchCount++;
      }
    }

    // check for languages tag match
    for (let langI = 0; langI < languages.length; langI++) {
      if (selectedTags[i] === languages[langI]) {
        matchCount++;
      }
    }
  }
  
  return matchCount === selectedTags.length;

  }

  return true;
}

export default FilterJobOffersByTags;
