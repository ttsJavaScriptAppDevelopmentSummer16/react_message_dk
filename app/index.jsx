import React from 'react';
import ReactDOM from 'react-dom';

class MessageInput extends React.Component {

  constructor() {
    super();
    this.state = {
      messages : [
        {
          text: "Bacon ipsum dolor amet swine boudin salami pork chop tenderloin ham hock rump frankfurter, jerky alcatra.",
          time: "1:00 pm",
          user: "Dallas"
        },
        {
          text: "Strip steak chicken swine turkey shankle prosciutto. Kevin prosciutto beef kielbasa tongue pork.",
          time: "2:00 pm",
          user: "Wendell"
        },
        {
          text: "Sirloin frankfurter ball tip, cupim pig hamburger pork belly meatball strip steak corned beef.",
          time: "3:00 pm",
          user: "Duke"
        },
        {
          text: "Pastrami ribeye frankfurter cupim tenderloin biltong shoulder kevin pork loin corned beef rump salami cow andouille shankle.",
          time: "4:00 pm",
          user: "Toki"
        }
    ]}
  }

  render() {

    const messageMap = this.state.messages.map(function(user, i) {
        return (<li key={i}>At {user.time}, {user.user} said "{user.text}"</li>)
    })

    return (
      <div>

        <ul>{messageMap}</ul>
        // <p>Welcome to Dustin and Kevins page</p>
        // <label>Enter text here<input type="text" /></label>
        // <input type="submit" value="Submit" />
      </div>
    )
  }
}

const mountPoint = document.getElementById('root');

ReactDOM.render(<MessageInput/>, mountPoint);
