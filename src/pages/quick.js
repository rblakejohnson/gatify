import React from "react";

export default class Quick extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <h1>Quick</h1>
        <p>current count: {this.state.count}</p>
        <button style={{userSelect: 'none'}} onClick={() => this.setState({ count: this.state.count +
          100 })}
>plus
        </button>
        <button style={{userSelect: 'none'}} onClick={() => this.setState({ count: this.state.count -
          100 })}
>minus
        </button>
      </div>
    )
  }
}
