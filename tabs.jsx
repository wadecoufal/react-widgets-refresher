import React from 'react';
import Header from './header';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currTabIdx: 0
    }
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(e, idx) {
    this.setState({currTabIdx: idx});
  }

  render() {
    let selectedTabContent = "";

    return (
      <div className="tab-component">
        <ul className="tabs">
          {this.props.tabs.map( (tab, idx) => {
            let klass = "tab";
            if (idx === this.state.currTabIdx) {
              selectedTabContent = tab.content;
              klass += " active-tab"
            }

            return <div key={Math.floor(Math.random() * 5000)} className={klass} onClick={(e) => this.toggleTab(e, idx)}>
              <h1>{tab.title}</h1>
            </div>;
          })}
        </ul>
        <article>
          {selectedTabContent}
        </article>
      </div>
    )
  }
}

export default Tabs;