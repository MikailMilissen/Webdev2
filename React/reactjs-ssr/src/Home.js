import React from 'react';
import logo from './react.svg';
import './Home.css';
import ChildComponent from './ChildComponent'

class Home extends React.Component {

  state = {
    id: 1,
    username: 'root'
  }

  render() {
    return (
      <div className="Home">
        <h1>Hello World</h1>
        <p></p>
        <ChildComponent userdata={this.state} />
      </div>
    );
  }
}

export default Home;
