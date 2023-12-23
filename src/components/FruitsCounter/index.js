// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="counter">{mangoesCount}</span> mangoes{' '}
            <span className="counter">{bananasCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <div className="contents">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <button type="button" onClick={this.onEatMango} className="btn">
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-container">
              <div className="contents">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <button
                  type="button"
                  onClick={this.onEatBanana}
                  className="btn"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
