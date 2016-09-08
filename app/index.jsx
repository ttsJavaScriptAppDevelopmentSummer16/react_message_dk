import React from 'react';
import ReactDOM from 'react-dom';

class MessageInput extends React.Component {

  render() {
    return (
      <div>
        <p>Welcome to Dustin and Kevins page</p>
        <label>Enter text here<input type="text" /></label>
        <input type="submit" value="Submit" />
      </div>
    )
  }
}

const mountPoint = document.getElementById('root');

ReactDOM.render(<MessageInput/>, mountPoint);
