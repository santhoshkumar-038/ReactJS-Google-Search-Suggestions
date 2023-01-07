import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  getRequestedSearch = suggestion => {
    console.log(suggestion)
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    // console.log(searchInput)
    const {suggestionsList} = this.props
    const filteredSearchResults = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo-sizing"
          />
          <div className="search-bar-container">
            <div className="suggestions-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon-alignment"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="list-container">
              {filteredSearchResults.map(eachSuggestionItem => (
                <SuggestionItem
                  key={eachSuggestionItem.id}
                  suggestionDetails={eachSuggestionItem}
                  getRequestedSearch={this.getRequestedSearch}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
