import React from 'react'

class Icon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      condition: true
    }
  }

  onClick(e) {
    e.preventDefault();
    console.log('clicked')
    this.setState({condition: !this.state.condition})
  }


  render() {
    var condition = this.state.condition ? "glyphicon-star-empty" : "glyphicon-star";
    return (
      <div>
        <span className="pull-right">
          <span onClick={this.onClick.bind(this)} className={`star glyphicon ${condition}`}></span>
        </span>
      </div>
    );
  };
}

export default Icon
