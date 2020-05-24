import React, { Component } from 'react';

import Feed from './components/Feed';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      tags: {
        hidden: true,
        addedTags: []
      }
    }

    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.clearTags = this.clearTags.bind(this);
  }

  componentDidMount() {
    fetch('../data/allJobs.json')
      .then(res => res.json())
      .then(data => this.setState({
        jobs: data
      }));
  }

  addTag(tag) {
    this.setState(state => {
      if (state.tags.addedTags.indexOf(tag) === -1) {
        state.tags.addedTags = state.tags.addedTags.concat(tag);
        state.tags.hidden = false;
      }

      return state;
    });
  }

  removeTag(tag) {
    this.setState(state => {
      const idx = this.state.tags.addedTags.indexOf(tag);

      if (idx >= 0) {
        state.tags.addedTags.splice(idx, 1);
      } else if (this.state.tags.addedTags.length === 0) {
        state.tags.hidden = true;
      }

      return state;
    });
  }

  clearTags() {
    this.setState({
      tags: {
        hidden: true,
        addedTags: []
      }
    });
  }

  render() {
    return (
      <main className="App">
        <div className="top-bg"></div>
        <Feed 
        state={this.state} 
        addTag={this.addTag} 
        removeTag={this.removeTag}
        clearTags={this.clearTags}/>
      </main>
    );
  }
}

export default App;
