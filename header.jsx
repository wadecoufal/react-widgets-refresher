import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  toggleTab(e) {
    this.props.onClick(this.props.idx);
    console.log('HEADER EVENT', e);
  }

  render() {
    return <div className="tab">
        <h1 onClick={(e) => {
          this.toggleTab(e);
        }}>
          {this.props.tab.title}
        </h1>
      </div>;
  }


}

export default Header;