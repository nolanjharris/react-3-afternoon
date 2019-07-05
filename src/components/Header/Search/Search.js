import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ input: val })
    console.log(val)
  }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" />

          <SearchIcon id="Search__icon" />
        </div>

      </section>
    )
  }
}