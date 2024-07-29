// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    count: 0,
  }
  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="Container">
        <div className="TextContainer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="name" className="para">
            Enter the phrase
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter the phrase"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            className="search-input"
          />
          <div>
            <p className="btn">No.of Letters: {searchInput.length}</p>
          </div>
        </div>
        <div className="imgContainer">
          <img
            className="img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
