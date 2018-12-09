import React from 'react';

class Autocomplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    }
    this.updateInputVal = this.updateInputVal.bind(this);
  }

  updateInputVal(e) {
    e.persist();
    this.setState({inputVal: e.target.value});
  }

  render() {

    const { inputVal } = this.state;

    return (
      <div className="autocomplete-widget">
        <input onChange={this.updateInputVal}></input>
        <ul>
          {this.props.names.map( name => {
            const inputLength = inputVal.length;
            if (name.slice(0, inputLength) === inputVal || inputVal.length === 0) {
              return <li key={Math.floor(5000 * Math.random())}>{name}</li>;
            } else {
              return "";
            }
          })}
        </ul>
      </div>
    )

  }

}

export default Autocomplete;