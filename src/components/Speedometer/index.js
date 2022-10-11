import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onApplybrake = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return {count: prevState.count}
    })
  }

  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return {count: prevState.count}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image-speed"
        />
        <div className="card-container">
          <h1 className="details">Speed is {count}mph</h1>
          <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              className="button btn-color"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="button btn-border"
              type="button"
              onClick={this.onApplybrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
